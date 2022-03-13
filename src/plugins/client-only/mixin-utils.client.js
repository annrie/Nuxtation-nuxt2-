"use strict";

import Vue from "vue";

Vue.mixin({
  methods: {
    loadAssetImage(src) {
      return require("/img" + src);
    },
  },
});

export default () => {};
