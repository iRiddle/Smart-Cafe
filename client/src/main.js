// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'
Vue.config.productionTip = false
Vue.use(Vuetify, {
  theme: {
    primary: colors.deepPurple.accent1, // #E53935
    secondary: colors.red.lighten4, // #FFCDD2
    accent: colors.indigo.base // #3F51B5
  }
})

//   purple: colors.purple,
//   color1: colors.purple.lighten5,
//   color2: colors.purple.lighten4,
//   color3: colors.purple.lighten3,
//   color4: colors.purple.lighten2,
//   color5: colors.purple.lighten1,
//   color6: colors.purple.darken1,
//   color7: colors.purple.darken2,
//   color8: colors.purple.darken3,
//   color9: colors.purple.darken4,
//   color10: colors.purple.accent1,
//   color11: colors.purple.accent2,
//   color12: colors.purple.accent3,
//   color13: colors.purple.accent4
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
