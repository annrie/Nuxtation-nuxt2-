<template>
  <div class="grid-container">
    <div class="grid-x">
      <div class="cell">
        <h1>{{ msg }}</h1>
      </div>
      <div class="cell">
        <ul id="accordion-menu" class="vertical menu" data-accordion-menu>
          <li>
            <a>Item 1</a>
            <ul class="menu vertical nested">
              <li><a>Item 1A</a></li>
              <li><a>Item 1B</a></li>
            </ul>
          </li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Meta from "~/assets/mixins/meta";

export default {
  name: "AccordionMenu",
  mixins: [Meta],
  data() {
    return {
      msg: "Accordion Menu",
      meta: {
        title: "Accordion Menu",
        type: "article",
      },
    };
  },
  mounted() {
    this.accordionMenu = new Foundation.AccordionMenu($("#accordion-menu"), {
      // These options can be declarative using the data attributes
      slideSpeed: 500,
      multiOpen: true,
    });
  },
};
</script>
<style lang="scss">
.is-submenu-item {
  background-color: $white;
}
</style>
