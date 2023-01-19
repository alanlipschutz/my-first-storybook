module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  features: {
    interactionsDebugger: true,
  },
  webpackFinal: async (config, { configType }) => {
    // Add Sass to storybook
    config.module.rules.push({
      test: /\.css$/,
      include: path.resolve(__dirname, "../style"),
      use: [
        {
          loader: "style-loader",
        },
        {
          loader: "css-loader",
          options: {
            url: false, // This was the important key ** see explanation
          },
        },
        {
          loader: "sass-loader",
        },
      ],
    });
    return config;
  },
};
