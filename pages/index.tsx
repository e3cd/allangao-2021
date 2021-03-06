import { NextPage, GetStaticProps } from "next";

import FixedSidebar from "../components/FixedSidebar";
import Layout from "../components/Layout";
import ScrollWrapper from "../components/ScrollWrapper";

interface Props {
  content: { attributes: HomeAttributes };
  metadata: { attributes: MetadataAttributes };
}
interface HomeAttributes {
  hero_title: string;
  hero_description: string;
}

interface MetadataAttributes {
  title: string;
}

const HomePage: NextPage<Props> = ({ content, metadata }) => {
  const { attributes } = content;

  return (
    <Layout metadata={metadata}>
      <FixedSidebar attributes={attributes} />
      <ScrollWrapper />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const content = await import(`../content/pages/${"home"}.md`);
  const metaData = await import(`../content/metadata/${"index"}.md`);
  return { props: { content: content.default, metadata: metaData.default } };
};

export default HomePage;
