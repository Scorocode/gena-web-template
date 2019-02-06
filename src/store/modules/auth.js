import {router} from '../../router';

const state = {
	user: null,
	token: '',
};

const mutations = {
	setUser: (state, payload) => {
		state.user = payload;
	},
	setToken: (state, payload) => {
		state.token = payload;
	},
};

const actions = {
	async signIn(context, data) {

		context.commit('error/clear', null, {root: true});
		context.commit('setUser', data);

		router.push('/');


	},
	async signOut(context) {
		context.commit('error/clear', null, {root: true});

		localStorage.removeItem('token');
		localStorage.removeItem('user');

		context.commit('setUser', null);
		context.commit('setToken', '');

		router.push('/signin');
	}
};

const getters = {
	user(state) {
		return state.user;
	},
	lastError(state) {
		return state.lastError;
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}
