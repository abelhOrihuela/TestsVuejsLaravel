var Vue = require('vue/dist/vue.js');
var VueRouter = require('vue-router/dist/vue-router.js');

Vue.use(VueRouter);


import Home from './components/home/home.vue'
import Dashboard from './components/dashboard/dashboard.vue'

const routes=[
  {
    path: '/home',
    component: Home,
    name: 'home'
  },
  {
    path: '/dashboard',
    component: Dashboard,
    name: 'dashboard'
  }
];

const router= new VueRouter({
  mode : 'hash',
  routes : routes
});



const app = new Vue({
  router,
  data:{
    message: "Hola Mundo Vuejs"
  }

}).$mount("#app");
