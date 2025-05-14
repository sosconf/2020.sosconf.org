// vue.config.js
module.exports = {
  // ...其他配置
  publicPath: process.env.NODE_ENV === 'production'
    ? '/' // 将 <REPONAME> 替换为您的 GitHub 仓库名称
    : '/',
  transpileDependencies: ["vuetify"], // 从您上传的文件中保留
  pwa: { // 从您上传的文件中保留
    name: "SOSCONF.zh 2020",
    themeColor: "#589bad"
  }
};