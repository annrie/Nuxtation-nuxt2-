# Nuxtation

日本語 | [English](./README.md)

> NuxtJS に Foundation for Sites を組み込んだボイラープレート

<p align="center"><img src="https://user-images.githubusercontent.com/5172584/80383058-0d91d600-88de-11ea-916a-7dfdea1f4800.png" alt="site image"></p>

このリポジトリは、プログレッシブ Vue.js フレームワークである[Nuxt.js プロジェクト](https://jp.nuxtjs.org)に[Foundation for Sites](https://get.foundation/sites/docs/)を統合する方法の一つの例です。

## 開発の動機

Foundation フレームワークと Vue.JS を連携させてきた二つのプロジェクト（[フェーズ Ⅰ](https://github.com/annrie/Foundation-Vue)と[フェーズ Ⅱ](https://github.com/annrie/Vuedation/tree/master)）を作ってきましたが、当然の流れとしてのこのプロジェクトです。

[Adding SCSS Libraries like Foundation to Vue's Nuxt.js](https://zendev.com/2018/05/04/adding-scss-libraries-like-foundation-to-nuxt.html)が最初のきっかけを作ってくれました。ありがとうございます。

なお、先行する上記二つ同様に、[vue-foundation](https://github.com/vue-foundation/vue-foundation)のコンポーネントを利用させていただいています。

## セットアップ

テンプレートを手動でセットアップするには、まず Git でダウンロードします。

```bash {.copy}
git clone git@github.com:annrie/Nuxtation.git projectname
cd projectname
```

## インストール

その後、コマンドラインでフォルダを開き、必要な依存関係をインストールします。
npm も使えますが、[yarn2](https://yarnpkg.com/getting-started/install) を使用しています。

```bash
＃ install dependencies
npx @yarnpkg/doctor # yarn2のセットアップ
echo "nodeLinker: node-modules" > .yarnrc.yml
yarn install
```

最後に、 `yarn dev` を実行して サーバーを立ち上げます。

```bash
http://localhost:3000
```

静的ファイルをビルドするには、次を実行します `yarn generate`。`dist`ディレクトリに書き出されます。

## ライセンス

[MIT](https://github.com/annrie/Nuxtation/blob/master/LICENSE)
Copyright &copy; 2020-present, Annrie
