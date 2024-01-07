let path = require('path');

config.resolve.alias = {
  js: path.resolve(__dirname, "../../../../src/jsMain/js/"),
};

config.module.rules.push({
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader', options: {
      presets: ["@babel/preset-env", "@babel/preset-react"]
    }
  }
});
