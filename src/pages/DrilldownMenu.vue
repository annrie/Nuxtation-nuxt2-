<template>
  <div class="grid-container">
    <div class="grid-x">
      <div class="cell">
        <h1>{{ msg }}</h1>
      </div>
      <div class="cell">
        <ul id="drilldown" class="vertical menu" data-drilldown>
          <li>
            <a>Item 1</a>
            <ul class="vertical menu">
              <li><a>Item 1A</a></li>
              <!-- ... -->
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
  name: "Drilldown",
  mixins: [Meta],
  data() {
    return {
      msg: "Drilldown Menu",
      meta: {
        title: "Drilldown Menu",
        type: "article",
      },
    };
  },
  mounted() {
    this.drilldown = new Foundation.Drilldown($("#drilldown"), {
      // These options can be declarative using the data attributes
      animationDuration: 500,
    });
  },
};
</script>
