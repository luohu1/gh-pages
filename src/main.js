import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Layout, Menu, Row, Col } from 'ant-design-vue'

Vue.use(Layout)
Vue.use(Menu)
Vue.use(Row)
Vue.use(Col)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
