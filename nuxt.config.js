/* -∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-
  Import
-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴- */
// import path from 'path'
import webpack from "webpack";
import StylelintPlugin from "stylelint-webpack-plugin";
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const imageminMozjpeg = require("imagemin-mozjpeg");
const open = require("open");

/* -∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-
  Use Global Variables
-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴- */
require("dotenv").config(); // from .env

// path
const baseUrl = process.env.BASE_URL || "http://localhost:3000";
const baseDir = process.env.BASE_DIR || "/";
const basePath = baseUrl + baseDir;

// meta
const lang = "ja";
const siteName = "Nuxtation";
const siteDesc = "This is a sample site that applies Foundation to Nuxt.js.";
const siteKeywords = "Foundation, Nuxt, Vue";

// images
const iconImages = baseDir + "img/";
const ogpImages = basePath + "assets/img/ogp/";

// pwa
const shortName = "Nuxtation";
// const manifestIcon = "/logo.png";
const splashscreens = baseUrl + "/img/splashscreens/";

// etc
// const apiUrl = process.env.API_URL || 'https://example.com'
// const colorPrimary = '#0A428C'
// const colorSecondary = '#FA4988'

/* -∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-
  Settings
-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴- */
export default {
  telemetry: false,
  hooks: {
    listen(server, { host, port }) {
      open(`http://${host}:${port}`);
    },
  },
  dev: process.env.NODE_ENV !== "production",
  mode: "universal",
  target: "static",
  env: {
    baseUrl,
    baseDir,
    basePath,
    siteName,
    siteDesc,
    siteKeywords,
    ogpImages,
    shortName,
  },
  router: {
    base: baseDir,
    middleware: "pages",
    linkActiveClass: "is-active",
    linkExactActiveClass: "is-exact-active",
  },
  generate: {
    dir: "dist",
    fallback: true,
  },
  vue: {
    config: {
      productionTip: true,
      devtools: true,
    },
  },
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      prefix: "og: http://ogp.me/ns#",
      lang,
    },
    // bodyAttrs: {},
    titleTemplate: `%s｜ ${siteName}`,
    meta: [
      // standard settings
      { charset: "utf-8" },
      { "http-equive": "x-ua-compatible", content: "ie=edge" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "format-detection",
        content: "telephone=no, email=no, address=no",
      },

      // SEO-related
      { hid: "description", name: "description", content: siteDesc },
      { hid: "keywords", name: "keywords", content: siteKeywords },

      // ogp-related
      { hid: "og:site_name", property: "og:site_name", content: siteName },
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:url", property: "og:url", content: basePath },
      { hid: "og:title", property: "og:title", content: siteName },
      { hid: "og:description", property: "og:description", content: siteDesc },
      {
        hid: "og:image",
        property: "og:image",
        content: `${ogpImages}common.png`,
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Twitter" },
      { property: "article:publisher", content: "FacebookURL" },
      { property: "fb:app_id", content: "FacebookAppID" },
    ],
    script: [
      {
        src:
          "//polyfill.io/v2/polyfill.min.js?features=WebAnimations,IntersectionObserver",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },

      // icons
      {
        rel: "icon",
        sizes: "16x16",
        type: "image/png",
        href: iconImages + "favicon-16x16.png",
      },
      {
        rel: "icon",
        sizes: "32x32",
        type: "image/png",
        href: iconImages + "favicon-32x32.png",
      },
      {
        rel: "icon",
        sizes: "96x96",
        type: "image/png",
        href: iconImages + "favicon-96x96.png",
      },
      // apple touch icon
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: splashscreens + "apple-icon-180.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "167x167",
        href: splashscreens + "apple-icon-167.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: splashscreens + "apple-icon-152.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: splashscreens + "apple-icon-120.png",
      },
      // { rel: "manifest", href: "/img/splashscreens/manifest.json" },
      // pwa iOS
      { name: "apple-mobile-web-app-capable", content: "yes" },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent",
      },
      // pwa splash screens
      // Doc: https://appsco.pe/developer/splash-screens
      {
        href: splashscreens + "apple-splash-2048-2732.png",
        media:
          "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
        rel: "apple-touch-startup-image",
      },
      {
        href: splashscreens + "apple-splash-2732-2048.png",
        media:
          "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
        rel: "apple-touch-startup-image",
      },
      {
        href: splashscreens + "apple-splash-1668-2388.png",
        media:
          "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
        rel: "apple-touch-startup-image",
      },
      {
        href: splashscreens + "apple-splash-2388-1668.png",
        media:
          "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
        rel: "apple-touch-startup-image",
      },
      {
        href: splashscreens + "apple-splash-1668-2224.png",
        media:
          "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
        rel: "apple-touch-startup-image",
      },
      {
        href: splashscreens + "apple-splash-2224-1668.png",
        media:
          "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
        rel: "apple-touch-startup-image",
      },
      {
        href: splashscreens + "apple-splash-1536-2048.png",
        media:
          "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
        rel: "apple-touch-startup-image",
      },
      {
        href: splashscreens + "apple-splash-2048-1536.png",
        media:
          "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
        rel: "apple-touch-startup-image",
      },
      {
        href: splashscreens + "apple-splash-1242-2688.png",
        media:
          "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
        rel: "apple-touch-startup-image",
      },
      {
        href: splashscreens + "apple-splash-2688-1242.png",
        media:
          "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
        rel: "apple-touch-startup-image",
      },
      {
        href: splashscreens + "apple-splash-1125-2436.png",
        media:
          "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
        rel: "apple-touch-startup-image",
      },
      {
        href: splashscreens + "apple-splash-2436-1125.png",
        media:
          "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
        rel: "apple-touch-startup-image",
      },
      {
        href: splashscreens + "apple-splash-828-1792.png",
        media:
          "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
        rel: "apple-touch-startup-image",
      },
      {
        href: splashscreens + "apple-splash-1792-828.png",
        media:
          "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
        rel: "apple-touch-startup-image",
      },
      {
        href: splashscreens + "apple-splash-1242-2208.png",
        media:
          "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
        rel: "apple-touch-startup-image",
      },
      {
        href: splashscreens + "apple-splash-2208-1242.png",
        media:
          "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
        rel: "apple-touch-startup-image",
      },
      {
        href: splashscreens + "apple-splash-750-1334.png",
        media:
          "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
        rel: "apple-touch-startup-image",
      },
      {
        href: splashscreens + "apple-splash-1334-750.png",
        media:
          "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
        rel: "apple-touch-startup-image",
      },
      {
        href: splashscreens + "apple-splash-640-1136.png",
        media:
          "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
        rel: "apple-touch-startup-image",
      },
      {
        href: splashscreens + "apple-splash-1136-640.png",
        media:
          "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
        rel: "apple-touch-startup-image",
      },
    ],
  },
  pwa: {
    // icon: {
    //   iconFileName: manifestIcon,
    // },
    manifest: {
      lang,
      name: siteName,
      short_name: shortName,
      description: siteDesc,
      background_color: "#ffffff",
      theme_color: "#ffffff",
      display: "standalone",
      orientation: "portrait-primary",
      icons: [
        {
          src: splashscreens + "manifest-icon-192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable any",
        },
        {
          src: splashscreens + "manifest-icon-512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable any",
        },
      ],
    },
    workbox: {
      skipWaiting: true,
      clientsClaim: true,
      offline: false,
      cacheAssets: false,
      runtimeCaching: [
        {
          urlPattern: "^https://fonts.(?:googleapis|gstatic).com/(.*)",
          handler: "cacheFirst",
        },
        {
          urlPattern: "https://cdn.jsdelivr.net/.*",
          handler: "cacheFirst",
        },
        {
          urlPattern: "https://cdn.materialdesignicons.com/.*",
          handler: "cacheFirst",
        },
        {
          urlPattern: baseDir + ".*",
          handler: "staleWhileRevalidate",
          strategyOptions: {
            cacheName: "my-cache",
            cacheExpiration: {
              maxAgeSeconds: 24 * 60 * 60 * 30,
            },
          },
        },
        {
          urlPattern: "/*",
          handler: "networkFirst",
          method: "GET",
        },
      ],
    },
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#333" },

  /*
   ** Global CSS
   */
  css: [
    "~/assets/scss/app.scss",
    "~/assets/scss/transition.scss",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],

  // pageTransition: {
  //   name: "fade-left",
  //   mode: "out-in",
  // },
  // layoutTransition: {
  //   name: "fade-right",
  //   mode: "out-in",
  // },
  /*
   ** Source Directory
   */
  srcDir: "src/",
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~assets/js/app.js", mode: "client" }, // necessary！
    { src: "~plugins/axios.js" },
    { src: "~plugins/logger.js" },
    { src: "~plugins/vue-scrollto" },
    { src: "~plugins/nuxt-mq" },
    // {src: '~plugins/vee-validate'},
    { src: "~plugins/vue2-perfect-scrollbar" },
    { src: "~plugins/vue-rellax" },
    { src: "~plugins/aos", mode: "client" },
    { src: "~plugins/font-awesome" },
    { src: "~plugins/vue-lazyload", mode: "client" },
    { src: "~plugins/localStorage", mode: "client" },
    { src: "~plugins/cookie-storage", mode: "client" },
    // {src: '~plugins/csvtojson'},
    { src: "~plugins/foundation", mode: "client" },
    { src: "~plugins/external", mode: "client" },
    // { src: "~plugins/pageTop", mode: "client" },
    { src: "~plugins/service-worker", mode: "client" },
    { src: "~plugins/window" },
    { src: "~plugins/gtm" },
    { src: "~plugins/ga", mode: "client" },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  stylelint: {
    files: [
      "src/assets/**/*.{s?(a|c)ss}",
      "{components,layouts,pages}/**/*.vue",
    ],
    fix: true,
  },
  /*
   ** Nuxt.js modules
   */
  buildModules: [
    "@nuxtjs/pwa",
    "@nuxtjs/gtm",
    ["@nuxtjs/google-analytics", { id: "UA-50443508-2" }],
    ["@nuxtjs/moment", ["ja"]],
    "@nuxtjs/stylelint-module",
  ],
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/style-resources",
    "@nuxtjs/dotenv",
    "@nuxtjs/svg",
    "@nuxtjs/sitemap",
    "vue-scrollto/nuxt",
    [
      "nuxt-fontawesome",
      {
        component: "fa",
      },
    ],
    [
      "nuxt-mq",
      {
        defaultBreakpoint: "large",
        breakpoints: {
          small: 640,
          medium: 768,
          tablet: 1024,
          large: 1200,
          xlarge: 1440,
          xxlarge: Infinity,
        },
      },
    ],
    [
      "nuxt-imagemin",
      {
        pngquant: { quality: "80" },
        plugins: [imageminMozjpeg({ quality: "80" })],
      },
    ],
  ],

  sitemap: {
    hostname: baseUrl,
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    // explude: [
    //   The directory you don't want to include
    // ],
    // routes: [
    //   If there is an auto-generated page
    // ]
  },
  // axios: {
  //   browserBaseURL: basePath,
  //   // baseURL:
  //   //   process.env.BASE_URL === "production"
  //   //     ? "https://phantomoon.com"
  //   //     : "http://localhost:3000"
  // },

  /*
   ** FontAwesome
   */
  fontawesome: {
    component: "fa",
  },

  styleResources: {
    scss: ["~assets/scss/app.scss"],
  },

  /*
   ** Build configuration
   */
  build: {
    babel: {
      configFile: "./babel.config.js",
    },
    collapseBooleanAttributes: true,
    decodeEntities: true,
    minifyCSS: true,
    minifyJS: true,
    processConditionalComments: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true,
    trimCustomFragments: true,
    useShortDoctype: true,
    minimize: true,
    minimizer: [
      new TerserJSPlugin({
        extractComments: false,
        parallel: true,
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessor: require("cssnano"),
        cssProcessorPluginOptions: {
          preset: ["default", { discardComments: { removeAll: true } }],
        },
      }),
    ],
    extractCSS: process.env.NODE_ENV === "production",
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: "styles",
            test: /\.(css|vue)$/,
            chunks: "all",
            enforce: true,
          },
        },
      },
    },
    // transpile: ['vee-validate/dist/rules'],
    quiet: false,
    // publicPath: 'CDN-address'
    followSymlinks: true,
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        _: "lodash",
        "window.jQuery": "jquery",
      }),
    ],
    postcss: {
      plugins: {
        "postcss-url": {},
        "postcss-nested": {},
        "postcss-responsive-type": {},
        "postcss-hexrgba": {},
      },
      presets: {
        autoprefixer: {
          grid: "autoplace",
        },
      },
    },
    // analyze: true,
    // babelrc: true,
    hardSource: true,
    fallback: false,
    publicPath: "/assets/",
    devtools: process.env.NODE_ENV === "production",
    // extractCSS: process.env.NODE_ENV === 'production',
    // subFolders: false,
    filenames: {
      app: () => "js/[name].js",
      chunk: () => "js/[name].js",
      css: () => "css/[name].css",
      img: () => "img/[folder]/[name].[ext]",
      font: () => "font/[name].[ext]",
    },
    /*
     ** Run ESLint on save
     */
    extend(config, ctx) {
      // if (process.server && process.browser) {
      if (ctx.isDev && ctx.isClient) {
        config.devtool = "source-map";
        // if (isDev && process.isClient) {
        config.plugins.push(
          new StylelintPlugin({
            files: ["**/*.vue", "**/*.scss"],
          })
        ),
          config.module.rules.push({
            enforce: "pre",
            test: /\.(js|vue)$/,
            loader: "eslint-loader",
            exclude: /(node_modules)/,
            options: {
              formatter: require("eslint-friendly-formatter"),
            },
          });
        if (ctx.isDev) {
          config.mode = "development";
        }
      }
      for (const rule of config.module.rules) {
        if (rule.use) {
          for (const use of rule.use) {
            if (use.loader === "sass-loader") {
              use.options = use.options || {};
              use.options.includePaths = [
                "node_modules/foundation-sites/scss",
                "node_modules/motion-ui/src",
              ];
            }
          }
        }
      }
      // vue-svg-inline-loader
      const vueRule = config.module.rules.find((rule) =>
        rule.test.test(".vue")
      );
      vueRule.use = [
        {
          loader: vueRule.loader,
          options: vueRule.options,
        },
        {
          loader: "vue-svg-inline-loader",
        },
      ];
      delete vueRule.loader;
      delete vueRule.options;
    },
  },
};
