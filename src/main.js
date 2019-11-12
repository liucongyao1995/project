import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Search, Grid, GridItem } from 'vant'

import { Row, Col } from 'vant';
Vue.config.productionTip = false
Vue.use(Search)
Vue.use(Grid).use(GridItem)
Vue.use(Row).use(Col);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
