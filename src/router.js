import Vue from 'vue'
import Router from 'vue-router'

import HomeView from './views/HomeView.vue'
import SigninView from "./views/SigninView";

// SC_ROUTES_IMPORT

Vue.use(Router)

export const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '*',
			redirect: '/'
		},
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/signin',
			component: SigninView
		},
		// SC_ROUTES
	]
});
