module.exports = {
  runtimeCompiler: true,
  // outputDir: '../docs/',

  // publicPath: process.env.NODE_ENV === 'production' ? '/(RepositoryName)/' : './',
  publicPath: '/tutorial/',

  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: './srv'
    }
  }
}
