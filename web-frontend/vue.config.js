const hljs = require('highlight.js')

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
                // この設定でMarkdownのRawデータを読み込めるようにする
                exportSource: true,
                markdownItOptions: {
                  highlight: function (str, lang) {
                    if (lang && hljs.getLanguage(lang)) {
                      try {
                        return hljs.highlight(lang, str).value
                      } catch (__) { }
                    }
                    return '' // use external default escaping
                  }
                }
              }
            }
          ]
        }
      ]
    }
  }
}
