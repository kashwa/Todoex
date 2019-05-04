import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  // { path: '/users', component: Users },
  // { path: '/', component: Home }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')