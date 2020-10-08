import AOS from 'aos';
import 'aos/dist/aos.css';
import Vue from 'vue';
import vuetify from './plugins/vuetify';
import './style/style.scss';
import App from './view/App.vue';


Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },
  vuetify,
  render: (h: any) => h(App),
}).$mount('#app');

