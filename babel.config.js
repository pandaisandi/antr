module.exports = {
  presets: ["@babel/preset-env"],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
  ],
  overrides: [
    {
      test: ["client/**/*.js"],
      presets: ["@babel/preset-react"],
    },
    {
      test: ["server/**/*.js"],
      presets: [["@babel/preset-env", { targets: { node: true } }]],
      plugins: [
        "babel-plugin-transform-typescript-metadata",
        [
          "@babel/plugin-transform-regenerator",
          {
            asyncGenerators: false,
            generators: false,
            async: false,
          },
        ],
      ],
    },
  ],
};
