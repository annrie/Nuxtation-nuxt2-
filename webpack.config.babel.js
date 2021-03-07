const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const imageminMozjpeg = require("imagemin-mozjpeg");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

const srcpath = "./src/";
const cssfile = "./app.scss";
const outputpath = "./dist/";
// const current = process.cwd()

// function resolve(dir) {
//   return path.join(__dirname, '..', dir)
// }

module.exports = (env) => {
  const mode = env && env.production ? "production" : "development";
  return {
    mode,
    entry: {
      main: path.resolve(__dirname, srcpath + "plugins/main.js"),
      css: path.resolve(__dirname, srcpath + "assets/scss" + cssfile),
    },
    context: srcpath,
    output: {
      chunkFilename: "[id].[hash].js",
      // https://reactjs.org/docs/cross-origin-errors.html
      crossOriginLoading: "anonymous",
      filename: "[name].[hash].js",
      // path: path.resolve(__dirname, 'dist'),
      path: path.resolve(__dirname, outputpath),
      // filename: 'main.js',
    },
    // ローカル開発用環境を立ち上げる
    // 実行時にブラウザが自動的に localhost を開く
    devServer: {
      contentBase: path.resolve(__dirname, "dist"),
      clientLogLevel: "none",
      // quiet: false,
      disableHostCheck: true,
      hot: true,
    },
    stats: {
      children: false,
      hash: false,
      warnings: false,
      performance: false,
      modules: false,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          include: path.resolve("src"),
          use: [
            {
              loader: "thread-loader",
              // loaders with equal options will share worker pools
              options: {
                // the number of spawned workers, defaults to (number of cpus - 1) or
                // fallback to 1 when require('os').cpus() is undefined
                workers: 2,

                // number of jobs a worker processes in parallel
                // defaults to 20
                workerParallelJobs: 50,

                // additional node.js arguments
                workerNodeArgs: ["--max-old-space-size=1024"],

                // Allow to respawn a dead worker pool
                // respawning slows down the entire compilation
                // and should be set to false for development
                poolRespawn: false,

                // timeout for killing the worker processes when idle
                // defaults to 500 (ms)
                // can be set to Infinity for watching builds to keep workers alive
                poolTimeout: 2000,

                // number of jobs the poll distributes to the workers
                // defaults to 200
                // decrease of less efficient but more fair distribution
                poolParallelJobs: 50,

                // name of the pool
                // can be used to create different pools with elsewise identical options
                name: "my-pool",
              },
            },
            {
              loader: "babel-loader",
              query: {
                presets: ["@babel/preset-env"],
              },
            },
          ],
        },
        {
          test: /\.vue$/,
          use: [
            {
              loader: "vue-loader",
              options: {
                prettify: true,
                transformAssetUrls: {
                  video: ["src", "poster"],
                  source: "src",
                  img: "src",
                  image: "xlink:href",
                },
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp)$/,
          use: [
            {
              loader: "url-loader",
              query: {
                limit: 1000, // 1kB
                name: "img/[name].[hash:7].[ext]",
              },
            },
          ],
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          use: [
            {
              loader: "url-loader",
              query: {
                limit: 1000, // 1kB
                name: "fonts/[name].[hash:7].[ext]",
              },
            },
          ],
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: process.env.NODE_ENV === "development",
              },
            },
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                url: true,
                sourceMap: !!(env && env.production),
              },
            },
            // {
            //   loader: 'postcss-loader',
            //   options: {
            //     ident: 'postcss',
            //     sourceMap: !!(env && env.production),
            //   },
            // },
            {
              loader: "sass-loader",
              options: {
                sourceMap: !!(env && env.production),
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ["*", ".js", ".jsx", ".vue", ".json"],
      modules: [srcpath, "node_modules"],
      alias: {
        vue$: "vue/dist/vue.esm.js",
        Foundation: "foundation-sites/js",
        whatInput: "what-input",
      },
    },
    plugins: [
      new VueLoaderPlugin(),
      new HardSourceWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: cssfile,
      }),
      new FriendlyErrorsWebpackPlugin(),
      new ImageminPlugin({
        disable: !env.production,
        test: /\.(jpe?g|png|gif|svg)$/i,
        pngquant: { quality: "80" },
        plugins: [imageminMozjpeg({ quality: "80" })],
      }),
      new HardSourceWebpackPlugin({
        cacheDirectory: "node_modules/.cache/hard-source/[confighash]",
        configHash(webpackConfig) {
          // node-object-hash on npm can be used to build this.
          return require("node-object-hash")({ sort: false }).hash(webpackConfig);
        },
        // Either false, a string, an object, or a project hashing function.
        environmentHash: {
          root: process.cwd(),
          directories: [],
          files: ["package-lock.json", "yarn.lock"],
        },
        // An object.
        info: {
          // 'none' or 'test'.
          mode: "none",
          // 'debug', 'log', 'info', 'warn', or 'error'.
          level: "debug",
        },
        // Clean up large, old caches automatically.
        cachePrune: {
          // Caches younger than `maxAge` are not considered for deletion. They must
          // be at least this (default: 2 days) old in milliseconds.
          maxAge: 2 * 24 * 60 * 60 * 1000,
          // All caches together must be larger than `sizeThreshold` before any
          // caches will be deleted. Together they must be at least this
          // (default: 50 MB) big in bytes.
          sizeThreshold: 50 * 1024 * 1024,
        },
      }),
    ],
    performance: {
      hints: false,
      maxEntrypointSize: 50000000,
      maxAssetsSize: 30000000,
      assetFilter(assetFilename) {
        return assetFilename.endWith(".js");
      },
    },
  };
};
