<template>
  <div class="back-to-top-sticky hide-for-print" data-sticky-container>
    <client-only>
      <aside class="back_to_top">
        <nuxt-link v-scroll-to="'#top'" to="">
          <fa :icon="fas.faArrowCircleUp" class="fa-3x" />
          <span class="show-for-sr">トップへ戻る</span>
        </nuxt-link>
      </aside>
    </client-only>

    <footer id="footer" class="footer">
      <div class="section-spacing">
        <div class="grid-container">
          <div class="grid-x grid-padding-x grid-padding-y align-center-middle">
            <div class="cell medium-auto text-center">
              <p>Copyright &copy;{{ year }} nuxtation project.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { fas, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
let now = new Date();
let year = now.getFullYear();
export default {
  name: 'Footer',
  props: {
    iconName: {
      type: String,
      default: 'box',
    },
    iconColor: {
      type: String,
      default: 'currentColor',
    },
  },
  data() {
    return {
      year,
    };
  },
  computed: {
    fas() {
      return fas;
    },
    faArrowCircleUp() {
      return faArrowCircleUp;
    },
  },
  mounted() {
    const hash = this.$route.hash;
    if (hash && hash.match(/^#.+$/)) {
      this.$scrollTo(hash);
    }
  },
};
</script>
