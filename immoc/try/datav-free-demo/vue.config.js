module.exports = {
  // 这一步是为了实现npm run build之后的index.html可直接双击浏览器打开后，能够找到相关css、js等文件
  // 从而可以正常预览效果
  // 解决了以前打包构建后的dist/index.html打开后报错：无法找到相关文件，路径有问题
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
}
