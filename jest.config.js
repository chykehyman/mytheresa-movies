module.exports = {
  cacheDirectory: ".jest-cache",
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["node_modules", ".mock.js", ".scss"],
  coverageReporters: ["text", ["cobertura", { projectRoot: ".." }]],

  maxWorkers: "50%",
  moduleFileExtensions: ["jsx", "js", "node"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)":
      "<rootDir>/jest.mock.js",
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    "^assets(.*)$": "<rootDir>/src/assets$1",
  },
  modulePaths: ["<rootDir>/src"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/build/"],
  transform: {
    ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform",
    "^.+\\.jsx?$": "babel-jest",
  },
};
