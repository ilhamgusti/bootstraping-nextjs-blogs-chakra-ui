import React from "react";
import {
  CSSReset,
  ThemeProvider as ChakraThemeProvider,
} from "@chakra-ui/core";
import { theme as baseTheme } from "@chakra-ui/theme";
import { CacheProvider } from "@emotion/core";
import createCache from "@emotion/cache";

const cache = createCache({
  key: "ilhm",
  stylisPlugins: [
    /* your plugins here */
  ],
  // prefix based on the css property
  prefix: (key) => {
    switch (key) {
      case "flex":
        return false;
      case "transform":
      default:
        return true;
    }
  },
});

const theme = {
  ...baseTheme,
  breakpoints: ["30em", "48em", "62em", "80em"],
  fonts: {
    heading: '"Avenir Next", sans-serif',
    body: "system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
  },
};

export const ThemeProvider = ({ children }) => {
  return (
    <CacheProvider value={cache}>
      <ChakraThemeProvider theme={theme}>
        <CSSReset />
        {children}
      </ChakraThemeProvider>
    </CacheProvider>
  );
};

export default ThemeProvider;
