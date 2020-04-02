import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'carbon-components/css/carbon-components.css';
import CarbonComponentsVue from '@carbon/vue/src/index';
import Header from "./components/Header";
import VueApollo from "vue-apollo";
import { client } from './vue-apollo';

Vue.config.productionTip = false;
Vue.use(CarbonComponentsVue);

const apolloProvider = new VueApollo({
  defaultClient: client,
});

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app');

Vue.component('Header', Header);
