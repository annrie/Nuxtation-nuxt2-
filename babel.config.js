module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        "@nuxt/babel-preset-app",
        {
          modules: false,
          targets: {
            browsers: ["> 1%", "last 2 versions", "not ie <= 8"],
          },
          useBuiltIns: "entry",
          corejs: 3,
          proposals: true,
        },
      ],
    ],
    plugins: [
      ["@babel/plugin-transform-runtime", { corejs: 3 }],
      ["@babel/plugin-syntax-dynamic-import"],
      [
        "@babel/plugin-proposal-object-rest-spread",
        {
          loose: true,
          useBuiltIns: true,
        },
      ],
      [
        "@babel/plugin-proposal-decorators",
        {
          legacy: true,
        },
      ],
      [
        "@babel/plugin-proposal-class-properties",
        {
          loose: true,
        },
      ],
      "@babel/plugin-proposal-export-default-from",
      "@babel/plugin-proposal-export-namespace-from",
      "@babel/plugin-proposal-numeric-separator",
    ],
  };
};
