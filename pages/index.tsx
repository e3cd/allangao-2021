import { NextPage, GetStaticProps } from "next";

import FixedSidebar from "../components/FixedSidebar";
import Layout from "../components/Layout";
import ScrollWrapper from "../components/ScrollWrapper";

import { getCardsContent } from "./../utils/getCardsContent";

interface Props {
  homepageContent: { attributes: HomeAttributes };
  metadata: { attributes: MetadataAttributes };
  cardsContent: CardTypes[];
  navData: { attributes: NavAttributes };
}
interface HomeAttributes {
  hero_title: string;
  hero_description: string;
}

interface MetadataAttributes {
  title: string;
}

interface NavAttributes {
  theme_icon_light: string;
  theme_icon_dark: string;
  header_logo_dark: string;
  header_logo_light: string;
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
  navData,
}) => {
  // console.log(cardsContent);

  const { attributes: homeAttributes } = homepageContent;

  return (
    <Layout metadata={metadata} navData={navData}>
      <FixedSidebar homeAttributes={homeAttributes} />
      <ScrollWrapper cardsContent={cardsContent} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const homepageContent = await import(`../content/pages/${"home"}.md`);
  const metaData = await import(`../content/metadata/${"index"}.md`);
  const navData = await import(`../content/nav/${"index"}.md`);

  // console.log(navData);

  const cardsContent = getCardsContent();

  return {
    props: {
      homepageContent: homepageContent.default,
      metadata: metaData.default,
      cardsContent,
      navData: navData.default,
    },
  };
};

export default HomePage;
