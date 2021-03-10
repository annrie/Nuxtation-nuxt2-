<template>
  <div class="container">
    <h2>{{ msg }}</h2>
    <form data-abide novalidate>
      <div data-abide-error class="alert callout" style="display: none">
        <p><i class="fi-alert" /> There are some errors in your form.</p>
      </div>
      <div class="grid-container">
        <div class="grid-x grid-margin-x">
          <div class="cell small-12">
            <label>
              Number Required
              <input
                type="text"
                placeholder="1234"
                aria-describedby="example1Hint1"
                aria-errormessage="example1Error1"
                required
                pattern="number"
              />
              <span class="form-error"> Yo, you had better fill this out, it's required. </span>
            </label>
            <p id="example1Hint1" class="help-text">Here's how you use this input field!</p>
          </div>
          <div class="cell small-12">
            <label>
              Password Required
              <input
                id="password"
                type="password"
                placeholder="yeti4preZ"
                aria-describedby="example1Hint2"
                aria-errormessage="example1Error2"
                required
              />
              <span class="form-error"> I'm required! </span>
            </label>
            <p id="example1Hint2" class="help-text">Enter a password please.</p>
          </div>
          <div class="cell small-12">
            <label>
              Re-enter Password
              <input
                type="password"
                placeholder="yeti4preZ"
                aria-describedby="example1Hint3"
                aria-errormessage="example1Error3"
                required
                pattern="alpha_numeric"
                data-equalto="password"
              />
              <span class="form-error"> Hey, passwords are supposed to match! </span>
            </label>
            <p id="example1Hint3" class="help-text">
              This field is using the `data-equalto="password"` attribute, causing it to match the
              password field above.
            </p>
          </div>
        </div>
      </div>
      <div class="grid-container">
        <div class="grid-x grid-margin-x">
          <div class="cell large-6">
            <label>
              URL Pattern, not required, but throws error if it doesn't match the Regular Expression
              for a valid URL.
              <input type="text" placeholder="https://get.foundation" pattern="url" />
            </label>
          </div>
          <div class="cell large-6">
            <label>
              Website Pattern, not required, but throws error if it doesn't match the Regular
              Expression for a valid URL or a Domain.
              <input
                type="text"
                placeholder="https://get.foundation or get.foundation"
                pattern="website"
              />
            </label>
          </div>
        </div>
      </div>
      <div class="grid-container">
        <div class="grid-x grid-margin-x">
          <div class="cell large-6">
            <label>
              European Cars, Choose One, it can't be the blank option.
              <select id="select" required>
                <option value="" />
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </label>
          </div>
          <fieldset class="cell large-6">
            <legend>Check these out</legend>
            <input id="checkbox1" type="checkbox" /><label for="checkbox1">Checkbox 1</label>
            <input id="checkbox2" type="checkbox" required /><label for="checkbox2">
              Checkbox 2
            </label>
            <input id="checkbox3" type="checkbox" /><label for="checkbox3">Checkbox 3</label>
          </fieldset>
        </div>
      </div>
      <div class="grid-container">
        <div class="grid-x grid-margin-x">
          <fieldset class="cell large-6">
            <legend>Choose Your Favorite - not required, you can leave this one blank.</legend>
            <input id="pocketsRed" type="radio" name="pockets" value="Red" />
            <label for="pocketsRed">Red</label>
            <input id="pocketsBlue" type="radio" name="pockets" value="Blue" />
            <label for="pocketsBlue">Blue</label>
            <input id="pocketsYellow" type="radio" name="pockets" value="Yellow" />
            <label for="pocketsYellow">Yellow</label>
          </fieldset>
          <fieldset class="cell large-6">
            <legend>Choose Your Favorite, and this is required, so you have to pick one.</legend>
            <input id="pokemonRed" type="radio" name="pokemon" value="Red" />
            <label for="pokemonRed">Red</label>
            <input id="pokemonBlue" type="radio" name="pokemon" value="Blue" required />
            <label for="pokemonBlue">Blue</label>
            <input id="pokemonYellow" type="radio" name="pokemon" value="Yellow" />
            <label for="pokemonYellow">Yellow</label>
          </fieldset>
        </div>
      </div>
      <div class="grid-container">
        <div class="grid-x grid-margin-x">
          <fieldset class="cell large-6">
            <button class="button" type="submit" value="Submit">Submit</button>
          </fieldset>
          <fieldset class="cell large-6">
            <button class="button" type="reset" value="Reset">Reset</button>
          </fieldset>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Meta from "~/assets/mixins/meta";

export default {
  mixins: [Meta],
  data() {
    return {
      msg: "Form",
      meta: {
        title: "Form",
        type: "article",
      },
    };
  },
  mounted() {
    $(document).foundation();
  },
};
</script>
