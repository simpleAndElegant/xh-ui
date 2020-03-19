import Vue from 'vue';
import App from './App.vue';


import xhComponents from '../src/index';

Vue.use(xhComponents);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
