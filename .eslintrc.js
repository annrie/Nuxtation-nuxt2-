module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jquery: true,
    es2020: true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    $nuxt: true,
    Foundation: true,
    whatInput: true,
    _: true,
    $: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
    parserOptions: {
      ecmaVersion: 11,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
        module: true,
        experimentalObjectRestSpread: true,
      },
    },
  },
  plugins: ["prettier"],
  extends: [
    "@nuxtjs",
    "prettier",
    "prettier/vue",
    "plugin:prettier/recommended",
    // 'eslint:recommended',
    "plugin:nuxt/recommended",
  ],
  // required to lint *.vue files
  settings: {
    "import/extensions": [".js", ".jsx"],
    "import/ignore": [".(scss | less | css)$"],
  },
  // add your custom rules here
  rules: {
    // semi: [2, 'never'],
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "no-console": ["warn", { allow: ["clear", "info", "error", "dir", "trace", "log"] }],
    // 'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "import/no-unresolved": "off",
    "vue/no-v-html": "off",
    "no-unused-vars": "off", // 使っていない変数を許可
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     htmlWhitespaceSensitivity: 'ignore',
    //     semi: false,
    //     singleQuote: true,
    //     // trailingComma: 'all',
    //   },
    // ],
    "vue/max-attributes-per-line": [
      "warn",
      {
        singleline: 10,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    "vue/html-indent": [
      "error",
      2,
      {
        baseIndent: 1,
      },
    ],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "any",
        },
      },
    ],
    // quotes: [
    //   0,
    //   "single",
    //   {
    //     avoidEscape: true,
    //     allowTemplateLiterals: true,
    //   },
    // ],
    // // タグの最後で改行しないで
    // 'vue/html-closing-bracket-newline': [
    //   0,
    //   {multiline: 'never', singleline: 'never'},
    // ],
    // 'vue/valid-v-on': 1,
    // 'vue/max-attributes-per-line': 0,
    // // 'vue/this-in-template': ['warn', 'never'],
    // // 不要なカッコは消す
    // 'no-extra-parens': 1,
    // // 無駄なスペースは削除
    // 'no-multi-spaces': 0,
    // // 不要な空白行は削除。2行開けてたらエラー
    // 'no-multiple-empty-lines': ['warn', {max: 1}],
    // // 関数とカッコはあけない(function hoge() {/** */})
    // 'func-call-spacing': [2, 'never'],
    // // true/falseを無駄に使うな
    // 'no-unneeded-ternary': 2,
    // // セミコロンは禁止
    // semi: [2, 'never', { beforeStatementContinuationChars: 'never' }],
    // // 文字列はシングルクオートのみ
    // // varは禁止
    // 'no-var': 2,
    // // jsのインデントは２
    // // indent: [2, 2],
    // // かっこの中はスペースなし！違和感
    // 'space-in-parens': [2, 'never'],
    // // コンソールは許可
    // 'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    // // カンマの前後にスペース入れる？
    // 'comma-spacing': 2,
    // // 配列のindexには空白入れるな(hogehoge[ x ])
    // 'computed-property-spacing': 2,
    // // キーワードの前後には適切なスペースを
    // 'keyword-spacing': 0,
    // 'import/no-named-as-default': 0,
    // 'import/no-unresolved': [2, {commonjs: true, amd: true}],
    // 'import/named': 2,
    // 'import/namespace': 0,
    // 'import/default': 2,
    // 'import/export': 2,
    // 'import/no-unresolved': 1,
    // 'space-before-function-paren': 1,
    // 'comma-dangle': 1
  },
};
