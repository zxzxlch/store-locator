const fs = require("fs");
const path = require("path");
const NodemonPlugin = require("nodemon-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const paths = {
  TS_CONFIG: path.resolve(fs.realpathSync(process.cwd()), "tsconfig.json")
};

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve("dist"),
    filename: "store-locator.js",
    library: "StoreLocator",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    plugins: [new TsconfigPathsPlugin({ configFile: paths.TS_CONFIG })]
  },
  node: {
    __dirname: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: "ts-loader"
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000
          }
        }
      }
    ]
  },
  plugins: [new CleanWebpackPlugin(["dist"]), new NodemonPlugin()]
};
