import aos from 'aos';
import 'aos/dist/aos.css';

aos.init({
  duration: 2000,
});

// export default ({ app }) => {
//   app.AOS = new AOS.init({
//     // disable: 'phone'
//     duration: 800,
//   });
// };

// Vue.mixin({
//   watch: {
//     '$route.path'() {
//       setTimeout(() => {
//         AOS.refresh();
//       }, 500);
//     },
//   },
// });
