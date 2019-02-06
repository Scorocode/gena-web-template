const state = {
	lastError: null
};
const mutations = {
	setError(state, error) {
		state.lastError = error;
	},
	clear(state) {
		state.lastError = null;
	},
};
const actions = {};
const getters = {
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
