import Vue from "vue";
import { $, jQuery } from "jquery";
import whatInput from "what-input";
import "foundation-sites";
import MotionUi from "motion-ui";

Vue.prototype.$motionUi = MotionUi;

// Vue.use( Foundation)
// import VeeValidate, {Validator} from 'vee-validate'
// import ja from 'vee-validate/dist/locale/ja'
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
// import './lib/foundation-explicit-pieces';
// import './lib/pageTop'
// import './lib/external'

// Validator.localize('ja', ja)
// Vue.use(VeeValidate, {locale:ja})
// const $ = jQuery;
// import { updateSetAccessor } from 'typescript'

// import  Vue  from 'vue';

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
window.$ = $;

// $('.is-submenu-item').on('click', function() {
//   $(this)
//     .parent('.parent')
//     .addClass('is-active')
// })
// function requireAll(r) {
//   r.keys().forEach(r);
// }
