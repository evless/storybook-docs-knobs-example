const { resolve } = require("path");

module.exports = {
  addons: ["@storybook/addon-knobs", "@storybook/addon-docs/register"],
  stories: ["../src/**/*.stories.tsx"],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        {
          loader: "babel-loader",
          options: {
            plugins: ["@babel/plugin-transform-react-jsx"],
          },
        },
        {
          loader: "@mdx-js/loader",
          options: {},
        },
      ],
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: [/node_modules/],
      include: [resolve(__dirname, "../src")],
      use: [require.resolve("ts-loader")],
    });

    config.resolve.extensions.push(".ts", ".tsx", ".mdx");

    return config;
  },
};
