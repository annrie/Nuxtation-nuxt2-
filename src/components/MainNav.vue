<template>
  <header
    id="mainNav"
    class="site-header sticky"
    data-sticky
    data-options="marginTop:0;"
    style="width: 100%"
    data-sticky-on="small"
  >
    <section
      class="site-title-bar title-bar"
      aria-label="Mobile navigation"
      data-hide-for="large"
      tabindex="-1"
    >
      <div class="title-bar-left">
        <div class="title-bar-title"><a href="/">Nuxtation</a></div>
      </div>
      <div class="title-bar-right" data-responsive-toggle="offCanvas">
        <button class="menu-icon" type="button" data-toggle="offCanvas" />
      </div>
    </section>

    <section class="site-navigation top-bar" aria-label="Site navigation" tabindex="-1">
      <div class="top-bar-left">
        <div class="site-desktop-title top-bar-title">
          <a href="/" rel="home" data-smooth-scroll>
            <img src="/img/logo.png" alt="nuxtation" />
            <component :is="tagName">Nuxtation</component>
          </a>
        </div>
      </div>

      <nav class="top-bar-left" aria-label="Main menu" tabindex="-1">
        <ul id="dropDown" class="dropdown menu desktop-menu" data-dropdown-menu>
          <template v-for="menu in getAll">
            <li v-if="menu.sub" :key="menu.index" class="is-dropdown-submenu-parent">
              <a>{{ menu.category }}</a>
              <ul class="vertical dropdown menu">
                <li v-for="submenu in menu.sub" :key="submenu.id">
                  <nuxt-link :to="submenu.link" :exact="submenu.link == '/'">
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
      </nav>
    </section>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MainNav",
  computed: {
    tagName() {
      if (this.$route.name === "index") {
        return "h1";
      }
      return "p";
    },
    ...mapGetters({
      getAll: "json/getAll",
    }),
  },
  mounted() {
    // this.offCanvas = new Foundation.OffCanvas($('#offCanvas'));
    this.smoothScroll = new Foundation.SmoothScroll($("#mainNav"));
    this.sticky = new Foundation.Sticky($("#mainNav"));
    this.dropDown = new Foundation.DropdownMenu($("#dropDown"));
  },
};
</script>
