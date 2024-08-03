import { defineConfig } from "vitepress";
import baseConfig from "@vue/theme/config";

const SIDE_BAR_CONFIG = [
  {
    text: "Getting Started",
    items: [
      {
        text: "introduction",
        link: "/introduction",
      },
      {
        text: "installation",
        link: "/installation",
      },
    ],
  },
  {
    text: "directories",
    items: [
      {
        text: "root",
        link: "folders/index",
      },
      {
        text: "husky",
        link: "folders/husky",
      },
      {
        text: "env",
        link: "folders/env",
      },
      {
        text: "packages",
        link: "folders/packages",
      },
      {
        text: "src",
        link: "/folders/src",
      },
      {
        text: "commitlint",
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

  base: "/File-Type-Based-Structure/",

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

