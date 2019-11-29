module.exports = {
  projects: [
    {
      displayName: "client",
      testEnvironment: "jsdom",
      testMatch: [
        "<rootDir>/client/src/**/__tests__/**/*.{js,jsx}",
        "<rootDir>/client/src/**/?(*.)(spec|test).{js,jsx}",
      ],
      moduleDirectories: ["node_modules", "<rootDir>/client/node_modules"],
      moduleNameMapper: {
        "^.+\\.css$": "identity-obj-proxy",
      },
      transform: {
        "^.+\\.jsx?$": "babel-jest",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
          "jest-transform-stub",
      },
      transformIgnorePatterns: [
        "[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$",
        "^.+\\.css$",
      ],
      collectCoverageFrom: ["<rootDir>/client/**/*.{js,jsx}"],
    },
    {
      displayName: "server",
      testEnvironment: "node",
      testMatch: [
        "<rootDir>/server/src/**/__tests__/**/*.js",
        "<rootDir>/server/src/**/?(*.)(spec|test).js",
      ],
      moduleDirectories: ["node_modules", "<rootDir>/server/node_modules"],
      transform: {
        "^.+\\.js$": "babel-jest",
      },
      transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.js$"],
      collectCoverageFrom: ["<rootDir>/server/**/*.js"],
    },
  ],
};