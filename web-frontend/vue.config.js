module.exports = {
  runtimeCompiler: true,
  outputDir: '../docs/',
  // publicPath: process.env.NODE_ENV === 'production' ? '/(RepositoryName)/' : './',
  publicPath: './',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          exclude: /node_modules/,
          use: [
            'vue-loader',
            {
              loader: 'markdown-to-vue-loader',
              options: {
                exportSource: true // この設定でMarkdownのRawデータを読み込めるようにする
              }
            }
          ]
        }
      ]
    }
  }
}
