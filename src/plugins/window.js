import Vue from 'vue'

Vue.use({
  install(Vue) {
    const $window = Vue.observable({
      width: 0,
      height: 0,
      pageYOffset: 0,
    })

    // SSR 時にエラーが出るため process.browser で分岐
    // Nuxt を使用しなければこの分岐は削除してください
    if (process.browser) {
      const onScroll = () => {
        $window.pageYOffset = global.pageYOffset
      }
      const onResize = () => {
        $window.width = document.documentElement.clientWidth
        $window.height = global.innerHeight
      }
      global.addEventListener('scroll', onScroll)
      global.addEventListener('resize', onResize)
      // 一度だけスクロールハンドラとリサイズハンドラを直接呼んで初期値をセット
      onScroll()
      onResize()
    }

    Vue.prototype.$window = $window
  },
})
