import { defineConfig } from "vitepress";
import baseConfig from "@vue/theme/config";

const SIDE_BAR_CONFIG = [
  {
    text: "Getting Started",
    items: [
      {
        text: "Introduction",
        link: "/introduction",
      },
      {
        text: "Installation",
        link: "/installation",
      },
    ],
  },
  {
    text: "Directories",
    items: [
      {
        text: "Root",
        link: "folders/index",
      },
      {
        text: "Husky",
        link: "folders/husky",
      },
      {
        text: "Env",
        link: "folders/env",
      },
      {
        text: "Packages",
        link: "folders/packages",
      },
      {
        text: "Src",
        link: "/folders/src",
      },
      {
        text: "Commitlint",
        link: "folders/commitlint",
      },
    ],
  },
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: baseConfig,
  srcDir: "src",
  lang: "en-US",

  base: "/File-type-Based-Structure/",

  title: "File-type-Based-Structure",
  description:
    "This project provides a comprehensive and well-structured starting point for developing Vue.js applications",

  themeConfig: {
    sidebar: {
      "/folders": SIDE_BAR_CONFIG,
      "/introduction": SIDE_BAR_CONFIG,
      "/installation": SIDE_BAR_CONFIG,
    },
    socialLinks: [{ icon: "github", link: "https://github.com/Broke-Developers/File-Type-Based-Structure" }],
    footer: {
      license: {
        text: "MIT License",
        link: "https://opensource.org/licenses/MIT",
      },
      copyright: `Copyright © 2023-${new Date().getFullYear()}`,
    },
  },
});
