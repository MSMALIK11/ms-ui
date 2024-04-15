import type { StorybookConfig } from "@storybook/react-webpack5";
import tailwindcss from 'tailwindcss';
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],


  framework: {
    name: "@storybook/react-webpack5",
    options: {
      postcssLoaderOptions: {
        implementation: require('postcss'),
        plugins: [
          tailwindcss('./tailwind.config.js'),
          require('autoprefixer'),
        ],
      }
    },
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
