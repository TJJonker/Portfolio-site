const path = require('path');

module.exports = {
  publicPath: '/',
  transpileDependencies: true,
  outputDir: 'public_html',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          use: 'raw-loader'
        }
      ]
    }
  }
};
