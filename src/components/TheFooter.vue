<template>
  <div class="back-to-top-sticky hide-for-print" data-sticky-container>
    <client-only>
      <aside class="back_to_top">
        <nuxt-link v-scroll-to="'#top'" to="">
          <i class="fa fa-arrow-circle-o-up fa-3x" aria-hidden="true" />
          <span class="show-for-sr">トップへ戻る</span>
        </nuxt-link>
      </aside>
    </client-only>

    <footer id="footer" class="footer">
      <div class="footer-container">
        <div class="grid-y grid-padding-y align-justify">
          <div class="cell small-shrink medium-6 text-center">
            <nav class="nav-social">
              <ul class="menu align-center">
                <!-- vue - loop -->
                <template v-for="item in social">
                  <li :key="item.index">
                    <a :href="item.link" target="_blank"><i :class="item.classes" /></a>
                  </li>
                </template>
              </ul>
            </nav>
          </div>
          <div class="cell copyright small-shrink text-center">
            <Copyright />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
const social = [
  {
    name: "instagram",
    link: "https://www.instagram.com/muraie_jin/",
    classes: "fa fa-instagram",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/jin-muraie",
    classes: "fa fa-linkedin-square",
  },
  {
    name: "github",
    link: "https://github.com/annrie",
    classes: "fa fa-github",
  },
  {
    name: "twitter",
    link: "https://twitter.com/muraie_jin",
    classes: "fa fa-twitter-square",
  },
  {
    name: "facebook",
    link: "https://www.facebook.com/muraiejin",
    classes: "fa fa-facebook-official",
  },
];

export default {
  name: "TheFooter",
  props: {
    iconName: {
      type: String,
      default: "box",
    },
    iconColor: {
      type: String,
      default: "currentColor",
    },
  },
  data() {
    return {
      social,
    };
  },
  mounted() {
    const hash = this.$route.hash;
    if (hash && hash.match(/^#.+$/)) {
      this.$scrollTo(hash);
    }
  },
};
</script>
