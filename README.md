# Nuxtation

English | [Japanese](./README.ja.md)

> Boilerplate with Foundations for Sites in NuxtJS

<p align="center"><img src="https://user-images.githubusercontent.com/5172584/80383058-0d91d600-88de-11ea-916a-7dfdea1f4800.png" alt="site image"></p>

This repository is one example of how to integrate [Foundation for Sites](https://get.foundation/sites/docs/) into the progressive Vue.js framework, the [Nuxt.js project](https://jp.nuxtjs.org).

## Motivation for development

I've made two projects ([Phase I](https://github.com/annrie/Foundation-Vue) and [Phase II](https://github.com/annrie/Vuedation/tree/master)) that have linked the Foundation framework to Vue.JS, and this is the natural progression.

[Adding SCSS Libraries like Foundation to Vue's Nuxt.js](https://zendev.com/2018/05/04/adding-scss-libraries-like-foundation-to-nuxt.html) provided the initial impetus. Thank you very much.

In addition, I use the component of [vue-foundation](https://github.com/vue-foundation/vue-foundation) as well as the two above.

## Setup

To set up the template manually, you can first download it in Git.

```bash {.copy}
 git clone git@github.com:annrie/Nuxtation.git projectname
 cd projectname
```

## Installation

Then, open the folder on the command line and install the required dependencies.
You can also use npm, but I'm using [yarn2](https://yarnpkg.com/getting-started/install).

```bash
# install dependencies
npx @yarnpkg/doctor # Setup of yarn2
echo "nodeLinker: node-modules" > .yarnrc.yml
yarn install
```

Finally, run `yarn dev` to start up the server. The finished site will be created in a folder named `dist` which can be viewed at the following URL.

```bash
http://localhost:3000
```

In order to build a static files, perform the following command `yarn generate` is executed. This is output to the `dist` directory.

## License

[MIT](https://github.com/annrie/Nuxtation/blob/master/LICENSE)
Copyright &copy; 2020-present, Annrie
