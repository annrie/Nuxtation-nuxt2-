<template>
  <div class="grid-container">
    <div class="grid-x">
      <div class="cell">
        <h1>{{ msg }}</h1>
      </div>
      <div class="cell">
        <ul id="tabs" class="tabs" data-tabs>
          <li class="tabs-title is-active">
            <a href="#panel1d" aria-selected="true">Tab 1</a>
          </li>
          <li class="tabs-title">
            <a href="#panel2d">Tab 2</a>
          </li>
          <li class="tabs-title">
            <a href="#panel3d">Tab 3</a>
          </li>
        </ul>

        <div class="tabs-content" data-tabs-content="tabs">
          <div id="panel1d" class="tabs-panel is-active">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div id="panel2d" class="tabs-panel">
            <p>
              Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus
              ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est
              bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.
            </p>
          </div>
          <div id="panel3d" class="tabs-panel">
            <p>
              Curabitur sit amet dolor vitae justo vulputate semper in quis ipsum. Proin dignissim,
              eros vitae aliquet pellentesque, tortor odio molestie felis, in tempor lectus metus
              nec lacus.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Meta from "~/assets/mixins/meta";

export default {
  name: "Tabs",
  mixins: [Meta],
  data() {
    return {
      msg: "Tabs",
      meta: {
        title: "Tabs",
        type: "article",
      },
    };
  },
  mounted() {
    this.tabs = new Foundation.Tabs($("#tabs"), {
      // These options can be declarative using the data attributes
      matchHeight: false,
    });
  },
};
</script>
