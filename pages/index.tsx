import { NextPage, GetStaticProps } from "next";

import FixedSidebar from "../components/FixedSidebar";
import Layout from "../components/Layout";
import ScrollWrapper from "../components/ScrollWrapper";

import { getCardsContent } from "./../utils/getCardsContent";

interface Props {
  homepageContent: { attributes: HomeAttributes };
  metadata: { attributes: MetadataAttributes };
  cardsContent: CardTypes[];
}
interface HomeAttributes {
  hero_title: string;
  hero_description: string;
}

interface MetadataAttributes {
  title: string;
}

// interface CardsAttributes {
//   attributes: CardAttribute;
//   html: string;
// }

type CardTypes = {
  attributes: object;
  html: string;
};

const HomePage: NextPage<Props> = ({
  homepageContent,
  cardsContent,
  metadata,
}) => {
  console.log(cardsContent);

  const { attributes: homeAttributes } = homepageContent;

  return (
    <Layout metadata={metadata}>
      <FixedSidebar homeAttributes={homeAttributes} />
      <ScrollWrapper cardsContent={cardsContent} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const homepageContent = await import(`../content/pages/${"home"}.md`);
  const metaData = await import(`../content/metadata/${"index"}.md`);

  const cardsContent = getCardsContent();

  return {
    props: {
      homepageContent: homepageContent.default,
      metadata: metaData.default,
      cardsContent,
    },
  };
};

export default HomePage;
