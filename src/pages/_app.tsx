import MDXProvider from "../contexts/MDXProvider";
import ThemeProvider from "../contexts/ThemeProvider";
import { AppProps } from "next/app";
import React from "react";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <MDXProvider>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
};

export default MyApp;
