export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  moduleNameMapper: {
    "^phoenix$": "<rootDir>/../deps/phoenix/priv/static/phoenix.mjs",
    "^phoenix_html$": "<rootDir>/../deps/phoenix_html/priv/static/phoenix_html.js",
    "^phoenix_live_view$": "<rootDir>/../deps/phoenix_live_view/priv/static/phoenix_live_view.esm.js",
  },
  testMatch: [
    "**/ui-rework/**/*.test.js"
  ]
};
