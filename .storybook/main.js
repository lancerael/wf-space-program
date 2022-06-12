
const path = require("path");
const { config } = require("process");
const tsconfigPaths = require("vite-tsconfig-paths").default;

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  "viteFinal": config => ({
    ...config,
    plugins: [...config.plugins, tsconfigPaths({
      projects: [path.resolve(path.dirname(__dirname), "tsconfig.json")],
    })]
  }),
}
