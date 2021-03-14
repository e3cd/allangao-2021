import { NextPage, GetStaticProps } from "next";

import FixedSidebar from "../components/FixedSidebar";
import Layout from "../components/Layout";
import ScrollWrapper from "../components/ScrollWrapper";

interface Props {
  homepageContent: { attributes: HomeAttributes };
  metadata: { attributes: MetadataAttributes };
}
interface HomeAttributes {
  hero_title: string;
  hero_description: string;
}

interface MetadataAttributes {
  title: string;
}

const HomePage: NextPage<Props> = ({ homepageContent, metadata }) => {
  const { attributes } = homepageContent;

  return (
    <Layout metadata={metadata}>
      <FixedSidebar attributes={attributes} />
      <ScrollWrapper />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const homepageContent = await import(`../content/pages/${"home"}.md`);
  const metaData = await import(`../content/metadata/${"index"}.md`);
  // const projectsCardContent = await import(`../content/cards/${"projects"}.md`);
  return {
    props: {
      homepageContent: homepageContent.default,
      metadata: metaData.default,
    },
  };
};

export default HomePage;
