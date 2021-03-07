<template>
  <div class="grid-container">
    <div class="grid-x">
      <div class="cell">
        <h1>{{ msg }}</h1>
      </div>
      <div class="cell">
        <div
          id="slider"
          class="slider"
          data-slider
          :data-initial-start="dataValue"
          :data-end="dataEnd"
        >
          <span class="slider-handle" data-slider-handle role="slider" tabindex="1" />
          <span class="slider-fill" data-slider-fill />
          <input type="hidden" class="slider-input" />
        </div>
        <p>Value: {{ dataValue }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Meta from "~/assets/mixins/meta";

export default {
  name: "Slider",
  mixins: [Meta],
  data() {
    return {
      msg: "Slider",
      dataValue: 50,
      dataEnd: 200,
      meta: {
        title: "Slider",
        type: "article",
      },
    };
  },
  mounted() {
    this.slider = new Foundation.Slider($("#slider"), {
      // These options can be declarative using the data attributes
      step: 10,
    });
    this.slider.$element.on("moved.zf.slider", () => {
      this.dataValue = this.slider.inputs.val();
    });
  },
};
</script>
