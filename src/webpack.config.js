module.exports = {
  //导入
  entry: {
    index: "./js/index"
  },
  //输出
  output: {
    filename: "[name].js"
  },
  devtool: "source-map",
  //主要处理文件
  resolve: {
    extensions: [".js"]
  },
  module: {
    loader: [{
      test: /\.js$/,
      loader: "babel",
      //排除文件
      exclude: "node_modules",
      query: {
        presets: ["es2015"]
      }
    }]
  }
};