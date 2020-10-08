import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';


Vue.use(Vuetify);

const opts: any = {
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      dark: {
        primary: '#52529B',
      },
      light: {
        primary: '#52529B',

      },
    },
  },
};

export default new Vuetify(opts);
