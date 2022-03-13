import { defineRule } from "vee-validate";
import AllRules from "@vee-validate/rules";
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
export default () => {};
