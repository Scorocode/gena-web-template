import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import {router} from './router'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import axios from 'axios';
import {BASE_URL} from "./const";

axios.defaults.baseURL = BASE_URL;

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
	store,
	router,
	render: h => h(App)
}).$mount('#app')
