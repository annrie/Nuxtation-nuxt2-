<template>
  <div
    id="offCanvas"
    class="mobile-off-canvas-menu off-canvas position-right"
    data-off-canvas
    data-close-on-click="true"
  >
    <button class="close-button" aria-label="Close menu" type="button" data-close>
      <span aria-hidden="true">&times;</span>
    </button>
    <ul
      id="drillDown"
      class="mobile-menu vertical menu"
      data-drilldown
      data-parent-link="false"
      data-submenu-toggle="true"
      data-close
      data-scroll-top="true"
    >
      <template v-for="menu in getAll">
        <li v-if="menu.sub" :key="menu.id" class="is-drilldown-submenu-parent" data-open>
          <a>{{ menu.category }}</a>
          <ul class="vertical dropdown menu">
            <li v-for="submenu in menu.sub" :key="submenu.index">
              <nuxt-link :to="submenu.link" :exact="submenu.link == '/'" data-close>
                {{ submenu.category }}
              </nuxt-link>
            </li>
          </ul>
        </li>
        <li v-else :key="menu.id">
          <nuxt-link :to="menu.link" :exact="menu.link == '/'">
            {{ menu.category }}
          </nuxt-link>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapGetters({
      getAll: "json/getAll",
    }),
  },
  mounted() {
    this.offCanvas = new Foundation.OffCanvas($("#offCanvas"));
    this.drillDown = new Foundation.Drilldown($("#drillDown"), {
      // These options can be declarative using the data attributes
      animationDuration: 1500,
    });
  },
};
</script>
