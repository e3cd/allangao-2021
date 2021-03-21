import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "./Navbar";

interface Props {
  children?: ReactNode;
  metadata: { attributes?: MetadataAttributes };
  navData: { attributes?: NavAttributes };
}

type MetadataAttributes = {
  title: String;
};

type NavAttributes = {
  theme_icon_light: string;
  theme_icon_dark: string;
  header_logo_dark: string;
  header_logo_light: string;
};

const Layout = ({ metadata, children, navData }: Props) => {
  const { attributes: metadataAttributes } = metadata;
  const { attributes: navAttributes } = navData as any;
  const title = metadataAttributes?.title;

  // console.log(metadata);
  return (
    <>
      <Head>
        <title>{title} | Allan Gao</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="img/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="img/favicon-16x16.png"
        />
        <link rel="manifest" href="img/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      <section className="flex flex-col lg:flex-row lg:h-screen">
        <Navbar navContent={navAttributes} />
        {children}
      </section>
    </>
  );
};

export default Layout;
