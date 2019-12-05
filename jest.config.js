// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  
  setupFiles: [
    '<rootDir>/enzyme.config.js',
  ],

  moduleNameMapper: {
    // "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/spec/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/spec/__mocks__/styleMock.js"
  },

  coverageDirectory: '<rootDir>/spec/coverage',

  verbose: true
};