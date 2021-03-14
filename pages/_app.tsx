import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import "../styles/globals.css";
import { NavbarStateProvider } from "../utils/navbarState";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <NavbarStateProvider>
        <Component {...pageProps} />
      </NavbarStateProvider>
    </ThemeProvider>
  );
}

export default MyApp;
