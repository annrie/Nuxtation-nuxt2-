/* -∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-
  Import
-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴- */
import { resolve } from "path";
import { defineNuxtConfig } from "@nuxt/bridge";
import webpack, { ProvidePlugin, HotModuleReplacementPlugin } from "webpack";
import Sass from "sass";
import Fiber from "fibers";
import StylelintPlugin from "stylelint-webpack-plugin";
import TerserJSPlugin from "terser-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import OptimizeCssAssetsPlugin from "optimize-css-assets-webpack-plugin";
import global from "./utils/global";
import getRoutes from "./utils/getRoutes";
import getSiteMeta from "./utils/getSiteMeta";
/* -∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-
  Use Global Variables
-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴- */
// path
// const baseUrl = process.env.BASE_URL || protocol + '://' + host + ':' + ports.local;
const baseUrl = process.env.BASE_URL || "http://localhost:3000";
const baseDir = process.env.BASE_DIR || "/";
const basePath = baseUrl + baseDir;

// meta
const lang = "en";
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
const meta = getSiteMeta();

/* -∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-
  Settings
-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴- */
export default defineNuxtConfig({
  // bridge: false,
  bridge: {
    meta: true,
    nitro: false, // trueでエラー →https://v3.nuxtjs.org/concepts/esm/
    app: true,
    capi: false, // trueでfoundation-sitesが効かなくなる。composition api
    transpile: true,
    scriptSetup: true,
    autoImports: true,
  },
  telemetry: false,
  dev: process.env.NODE_ENV !== "production",
  // ssr: true,
  ssr: false,
  target: "static",
  // target: "server",
  env: {
    baseUrl,
    baseDir,
    basePath,
    siteName,
    siteDesc,
    siteKeywords,
    ogpImages,
    shortName,
    lang,
  },
  router: {
    base: baseDir,
    middleware: "pages",
    prefetchLinks: false,
    // middleware: ['pages','visits','user-agent'],
    linkActiveClass: "is-active",
    linkExactActiveClass: "is-exact-active",
  },
  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID,
    },
  },
  privateRuntimeConfig: {},
  generate: {
    dir: "dist",
    fallback: true,
    interval: 2000,
  },
  vue: {
    config: {
      productionTip: true,
      devtools: true,
    },
  },
  ignoreOptions: {
    ignorecase: false,
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
      { property: "og:site_name", content: global.siteName || "" },
      {
        hid: "description",
        name: "description",
        content: global.siteDesc || "",
      },
      {
        name: "format-detection",
        content: "telephone=no, email=no, address=no",
      },

      // SEO-related
      { hid: "description", name: "description", content: siteDesc },

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
      { property: "og:image:width", content: "740" },
      { property: "og:image:heith", content: "300" },
      { name: "twitter:site", content: global.siteName || "" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "article:publisher", content: "FacebookURL" },
      { property: "fb:app_id", content: "FacebookAppID" },
    ],
    script: [
      // polifills
      // {
      //   src: '//polyfill.io/v2/polyfill.min.js?features=WebAnimations,IntersectionObserver',
      // },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/fork-awesome@1.1.7/css/fork-awesome.min.css",
        integrity: "sha256-gsmEoJAws/Kd3CjuOQzLie5Q3yshhvmo7YNtBG7aaEY=",
        crossorigin: "anonymous",
      },
      {
        hid: "canonical",
        rel: "canonical",
        href: global.siteUrl,
      },
      // icons
      // {
      //   rel: 'icon',
      //   sizes: '16x16',
      //   type: 'image/png',
      //   href: iconImages + 'favicon-16x16.png',
      // },
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
      // dev: true,
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
        {
          urlPattern: ".*api.*",
          handler: "StaleWhileRevalidate",
          strategyOptions: {
            cacheName: "api",
            chacheExpiration: {
              maxAgeSeconds: 72 * 60 * 60,
            },
            cacheableResponse: {
              statuses: [200],
            },
          },
        },
      ],
    },
  },

  // features: {
  //   transitions: false
  // },
  alias: {
    "~/*": resolve(__dirname, "src/*"),
    "@/*": resolve(__dirname, "src/*"),
  },
  vueMeta: { refreshOnceOnNavigation: true },
  /*
   ** Customize the progress-bar color
   */
  // loading: "~/components/loading.vue",

  /*
   ** Global CSS
   */
  css: [
    "foundation-icon-fonts/foundation-icons.css",
    "~assets/scss/app.scss",
    "~assets/scss/transitions.scss",
    // "@fortawesome/fontawesome-svg-core/styles.css",
    // LESS files in the project.
    "~assets/less/main.less",
  ],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    markdown: {
      prism: {
        theme: "prism-themes/themes/prism-material-oceanic.css",
      },
    },
    nestedProperties: ["author.name"],
  },

  // by CSS
  pageTransition: {
    name: "fade",
    mode: "out-in",
  },
  // pageTransition: 'bounce',
  // by JS
  // transition: {
  //   mode: 'out-in',
  //   css: false,
  //   beforeEnter: el => {
  //     console.log('about: before enter')
  //     $(el).hide()
  //   },
  //   enter: (el, done) => {
  //     console.log('about: enter')
  //     $(el).fadeTo(3000, 1)
  //     done()
  //   },
  //   afterEnter: el => {
  //     console.log('about:after enter')
  //   },
  //   leave: (el, done) => {
  //     console.log('about: leave')
  //     $(el).fadeTo(3000, 0, () => {
  //       $(el).hide()
  //     })
  //     done()
  //   },
  //   afterLeave: el => {
  //     console.log('about: after leave')
  //     $(el).hide()
  //   }
  // },

  layoutTransition: {
    name: "fade-layout",
    mode: "out-in",
  },
  /*
   ** Source Directory
   */
  srcDir: "src/",
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/client-only/foundation.client.js",
    "~/plugins/client-only/motion-ui.client.js",
    "~/plugins/client-only/aos.client.js",
    "~/plugins/client-only/ga.client.js",
    // "~/plugins/client-only/font-awesome.js",
    // "~/plugins/client-only/vue-lazyload.client.js",
    "~/plugins/server-client/axios.server.js",
    // "~/plugins/server-client/vue3-mq.server.js",
    // "~/plugins/vee-validate.js",
    "~/plugins/client-only/logger.client.js",
    "~/plugins/vue-scrollto.js",
    "~/plugins/vue2-perfect-scrollbar.js",
    "~~/node_modules/vue-rellax/lib/nuxt-plugin",
    // "~/plugins/vue-rellax.js",
    // '~/pluginsc/client-only/localStorage.client.js',
    // '~/plugins/client-only/cookie-storage.client.js',
    "~/plugins/client-only/pageTop.client.js",
    "~/plugins/client-only/external.client.js",
    "~/plugins/client-only/service-worker.client.js",
    "~/plugins/client-only/window.client.js",
    "~/plugins/client-only/mixin-utils.client.js",
    "~/plugins/basic-import",
    "~/plugins/client-only/vue-notifications.client.js",
    // "~/plugins/utils.js",
  ],
  /*
   ** Nuxt.js dev-modules
   */
  stylelint: {
    files: [
      "./src/assets/**/*.{s?(a|c)ss}",
      "{components,layouts,pages}/**/*.vue",
    ],
    fix: true,
  },
  /*
   ** Nuxt.js modules
   */
  buildModules: [
    // "nuxt-vite",
    // [
    //   "@nuxtjs/fontawesome",
    //   {
    //     component: "fontAwesome",
    //     suffix: true,
    //   },
    // ],
    [
      "@nuxt/typescript-build",
      {
        typeCheck: true,
        ignoreNotFoundWarnings: true,
      },
    ],
    "@aceforth/nuxt-optimized-images",
    "@nuxtjs/pwa",
    "@nuxtjs/gtm",
    "@nuxtjs/google-analytics",
    "nuxt-purgecss",
    // Doc: https://github.com/nuxt-community/eslint-module
    ["@nuxtjs/eslint-module", { ignorePath: ".eslintignore" }],
    // Doc: https://github.com/nuxt-community/stylelint-module
    "@nuxtjs/stylelint-module",
  ],
  loaders: {
    ts: {
      silent: true,
    },
    tsx: {
      silent: true,
    },
  },
  typescript: {
    shim: false,
    typeCheck: {
      eslint: {
        files: "./**/*,{ts,vue}",
      },
    },
  },
  vite: false,
  // vite: {
  //   ssr: true,
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: "@import '@/assets/scss/app-resources.scss';",
  //       },
  //     },
  //   },
  //   vue: {},
  // },
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID, // Use as fallback if no runtime config is provided
    debug: {
      enabled: true,
      sendHitTask: true,
    },
    autoTracking: {
      pageviewTemplate: (route) => {
        return {
          page: route.path,
          title: window.document.title,
          location: window.location.href,
        };
      },
    },
  },
  modules: [
    "@nuxt/content",
    "@nuxtjs/axios",
    // '@nuxtjs/proxy',
    "@nuxtjs/style-resources",
    "nuxt-svg-loader",
    // "@nuxtjs/svg",
    "@nuxtjs/sitemap",
    "nuxt-client-init-module",
    "vue-scrollto/nuxt",
  ],
  optimizedImages: {
    optimizeImages: true,
    imagesName: ({ isDev }) =>
      isDev ? "[path][name][hash:optimized].[ext]" : "img/[name].[ext]",
  },
  // fontawesome: {
  //   icons: {
  //     solid: FontAwesome.solid,
  //     regular: FontAwesome.regular,
  //     brands: FontAwesome.brands,
  //   },
  // },
  sitemap: {
    hostname: global.siteUrl,
    routes() {
      return getRoutes();
    },
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    //   // explude: [
    //   //   含めたくないディレクトリ
    //   // ],
    //   // routes: [
    //   //   自動生成ページがあれば
    //   // ]
  },
  axios: {
    // proxy: true,
    // browserBaseURL: basePath,
    // baseURL:
    //   process.env.BASE_URL === "production"
    //     ? "https://phantomoon.com"
    //     : "http://localhost:3000"
  },
  proxy: {},
  auth: {
    cookie: {
      options: {
        secure: true,
        sameSite: "lax",
      },
    },
  },
  /*
   ** FontAwesome
   */
  // fontawesome: {
  //   component: "fa",
  // },

  styleResources: {
    scss: ["~assets/scss/app-resources.scss"],
  },

  /*
   ** Build configuration
   */
  build: {
    loaders: {
      // vite
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber,
        },
      },
    },
    postcss: {
      // プリセット名
      // order: 'cssnanoLast',
      // // 順序付けされたプラグイン名
      // order: ['postcss-import', 'postcss-preset-env', 'cssnano'],
      // プラグインの順番を算出するための関数
      order: (names, presets) => presets.cssnanoLast(names),
      plugins: {
        "postcss-url": false, // 画像を相対パスに
        "postcss-nested": {},
        "postcss-responsive-type": {},
        "postcss-hexrgba": {},
      },
      presets: {
        autoprefixer: {
          grid: true,
        },
      },
    },
    // babel: {
    //   configFile: "./babel.config.js",
    // },
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
    extractCSS: true,
    // extractCSS: {
    //   ignoreOrder: true,
    // },
    // extractCSS: process.env.NODE_ENV === 'production',
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
    splitChunks: {
      //   layouts: true,
      //   pages: true,
      //   commons: {
      //     test: /[\\/]node_modules[\\/]/,
      //     name: "vendor",
      //     chunks: "initial",
      //   },
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.(css|vue)$/,
          chunks: "all",
          enforce: true,
        },
      },
    },
    // transpile: ["@vee-validate/rules"],
    quiet: false,
    // publicPath: 'CDNアドレス'
    followSymlinks: true,
    plugins: [
      // new ESLintPlugin({
      //   extensions: [".ts", ".js"],
      //   formatter: "stylish",
      //   exclude: "node_modules",
      // }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        _: "lodash",
        "window.jQuery": "jquery",
      }),
    ],
    // analyze: true,
    babelrc: true,
    hardSource: false,
    fallback: false,
    // publicPath: '/assets/',
    devtools: process.env.NODE_ENV === "production",
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
    extend(config, { isDev, isClient }) {
      if (isDev && process.client) {
        config.node = {
          fs: "empty",
          child_process: "empty",
          tls: "empty",
          net: "empty",
        };
        config.devtool = "source-map";
        config.plugins.push(
          new StylelintPlugin({
            files: ["**/*.vue", "**/*.scss"],
          })
        );
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)|(\.svg$)/,
          options: {
            formatter: require("eslint-friendly-formatter"),
          },
        });
        config.plugins.push(
          new ESLintPlugin({
            extensions: [".ts", ".js"],
            formatter: "stylish",
            exclude: "node_modules",
          })
        );
        // Vue.transformAssetUrls.video = ["src", "poster"];
        config.plugins.push(new webpack.HotModuleReplacementPlugin());
        config.module.rules.push({
          test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
          loader: "file-loader",
        });
        config.optimization.splitChunks.maxSize = 200000;
        if (isDev) {
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
      config.performance.maxAssetSize = 50000000;
    },
  },
});
//   extend(config, { isDev, isClient }) {
//     if (isDev && isClient) {
//       config.module.rules.push({
//         enforce: "pre",
//         test: /\.(js|vue)$/,
//         loader: "eslint-loader",
//         exclude: /(node_modules)/,
//       });

//       // Add postcss loader for CSS files
//       const cssLoader = config.module.rules.find(
//         (loader) => loader.test.toString() === "/\\.css$/"
//       );
//       cssLoader.use.push("postcss-loader");
//     }
//   },
// },
