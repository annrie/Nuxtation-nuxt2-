import Vue from "vue";

Vue.mixin({
  data() {
    return {
      small: false, // until 640px
      medium: false, // until 768px
      tablet: false, // from 1024px
      largePlus: false, // from 1024px and until 1200px
      large: false, // from 1024px
      xlarge: false, // from 1200px
      xxlarge: false, // from 1440px
    };
  },
  watch: {
    $mq() {
      this.small = this.$mq === "small";
      this.medium = this.$mq === "medium";
      this.tablet = this.$mq === "tablet";
      this.largePlus = this.$mq === "xlarge" || this.$mq === "xxlarge";
      this.large = this.$mq === "large";
      this.xlarge = this.$mq === "xlarge";
      this.xxlarge = this.$mq === "xxlarge";
    },
  },
  mounted() {
    this.small = this.$mq === "small";
    this.medium = this.$mq === "medium";
    this.tablet = this.$mq === "tablet";
    this.largePlus = this.$mq === "xlarge" || this.$mq === "xxlarge";
    this.large = this.$mq === "large";
    this.xlarge = this.$mq === "xlarge";
    this.xxlarge = this.$mq === "xxlarge";
  },
});
