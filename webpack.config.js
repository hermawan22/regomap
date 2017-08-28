const path = require("path");
const webpack = require("webpack");

const config = {
  context: __dirname, // agar webpack dijalankan dari root directory, walau dipanggil dari child directory
  entry: [
    // For HMR
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server",
    "./src/App.jsx"
  ],
  devtool: "cheap-eval-source-map", // untuk lebih gampang ngeliat code asli saat di devtool browser
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  devServer: {
    hot: true, // for HMR
    publicPath: "/dist/",
    historyApiFallback: true
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"] // import file purpose
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin()], // untuk HMR
  module: {
    rules: [
      {
        // linting on terminal
        enforce: "pre",
        test: /\.jsx?$/,
        loader: "eslint-loader",
        exclude: /node-modules/
      },
      {
        // loader for jsx
        test: /\.jsx?$/,
        loader: "babel-loader"
      },
      {
        // loader for css
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};

if (process.env.NODE_ENV === "production") {
  config.entry = "./src/App.jsx";
  config.devtool = false;
  config.plugins = [];
}

module.exports = config;
