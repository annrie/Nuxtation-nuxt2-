<template>
  <div class="grid-container">
    <div class="grid-x">
      <div class="cell">
        <h1>{{ msg }}</h1>
      </div>
      <div class="cell">
        <div id="orbit" class="orbit" role="region" aria-label="Favorite Space Pictures" data-orbit>
          <ul class="orbit-container">
            <button class="orbit-previous">
              <span class="show-for-sr">Previous Slide</span>
              &#9664;&#xFE0E;
            </button>
            <button class="orbit-next">
              <span class="show-for-sr">Next Slide</span>
              &#9654;&#xFE0E;
            </button>
            <li class="is-active orbit-slide">
              <img class="orbit-image" src="/img/orbit/01.jpg" alt="Space" />
              <figcaption class="orbit-caption">Space, the final frontier.</figcaption>
            </li>
            <li class="orbit-slide">
              <img class="orbit-image" src="/img/orbit/02.jpg" alt="Space" />
              <figcaption class="orbit-caption">Lets Rocket!</figcaption>
            </li>
            <li class="orbit-slide">
              <img class="orbit-image" src="/img/orbit/03.jpg" alt="Space" />
              <figcaption class="orbit-caption">Encapsulating</figcaption>
            </li>
            <li class="orbit-slide">
              <img class="orbit-image" src="/img/orbit/04.jpg" alt="Space" />
              <figcaption class="orbit-caption">Outta This World</figcaption>
            </li>
          </ul>
          <nav class="orbit-bullets">
            <button class="is-active" data-slide="0">
              <span class="show-for-sr">First slide details.</span>
              <span class="show-for-sr">Current Slide</span>
            </button>
            <button data-slide="1">
              <span class="show-for-sr">Second slide details.</span>
            </button>
            <button data-slide="2">
              <span class="show-for-sr">Third slide details.</span>
            </button>
            <button data-slide="3">
              <span class="show-for-sr">Fourth slide details.</span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Meta from "~/assets/mixins/meta";

export default {
  name: "Orbit",
  mixins: [Meta],
  data() {
    return {
      msg: "Orbit",
      meta: {
        title: "Orbit",
        type: "article",
      },
    };
  },
  mounted() {
    this.orbit = new Foundation.Orbit($("#orbit"), {
      // These options can be declarative using the data attributes
      timerDelay: 2000,
    });
  },
};
</script>
