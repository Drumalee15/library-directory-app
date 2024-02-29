module.exports = {
  testEnvironment: "jsdom",
  testTimeout: 60000,
  moduleNameMapper: {
    "\\.(css|sass|jpg)$": "identity-obj-proxy",
  },
  // Ensure Jest processes `.js` and `.jsx` files with `babel-jest`
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  // Adjust the pattern to exclude transforming node_modules except for specific packages
  transformIgnorePatterns: [
    "node_modules/(?!axios).+\\.js$"
  ],
  reporters: [
    "default",
    [
      "./node_modules/jest-html-reporter",
      {
        pageTitle: "Library Application Jest Tests",
        includeFailureMsg: true,
      },
    ],
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/node_modules/**",
    "!**/coverage/**",
    "!**/serviceWorker.js",
    "!**/index.js",
    "!**/config.js",
    "!*.config.js",
    "!.eslintrc.js",
    "!**/dist/**",
    "!server.js",
  ],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
  coverageDirectory: "../coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "package.json",
    "package-lock.json",
  ],
  testMatch: [
    "**/src/tests/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[jt]s?(x)"
  ],
};