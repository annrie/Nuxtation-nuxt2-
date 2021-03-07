<template>
  <div class="grid-container">
    <div class="grid-x">
      <div class="cell">
        <h1>{{ msg }}</h1>
      </div>
      <div class="cell">
        <button class="button" type="button" data-toggle="dropdown1">Toggle Dropdown</button>
        <div id="dropdown1" class="dropdown-pane" data-dropdown data-auto-focus="true">
          Example form in a dropdown.
          <form>
            <div class="row">
              <div class="medium-6 columns">
                <label>
                  Name
                  <input type="text" placeholder="Kirk, James T." />
                </label>
              </div>
              <div class="medium-6 columns">
                <label>
                  Rank
                  <input type="text" placeholder="Captain" />
                </label>
              </div>
            </div>
          </form>
        </div>
        <button class="button" type="button" data-toggle="dropdown2">Hoverable Dropdown</button>
        <div
          id="dropdown2"
          class="dropdown-pane"
          data-dropdown
          data-hover="true"
          data-hover-pane="true"
        >
          v-foundation directive doesn't work here
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Meta from "~/assets/mixins/meta";

export default {
  name: "Dropdown",
  mixins: [Meta],
  data() {
    return {
      msg: "Dropdown",
      meta: {
        title: "Dropdown",
        type: "article",
      },
    };
  },
  mounted() {},
};
</script>
