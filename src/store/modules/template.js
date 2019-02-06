import api from '../../axios-instance';

const state = {
	items: [],
	currentItemUID: null
};

const mutations = {
	set(state, items) {
		state.items = items;
	},
	add(state, item) {
		state.items.push(item);
	},
	update(state, item) {
		const idx = state.items.findIndex(el => el.uid === item.uid);
		if (idx >= 0) {
			state.items.splice(idx, 1, item);
		}
	},
	delete(state, item) {
		const idx = state.items.findIndex(el => el.uid === item.uid);
		if (idx >= 0) {
			state.items.splice(idx, 1);
		}
	},

};

const actions = {
	async getAll(context) {

	},

	async add(context) {

	},

	async update(context, item) {

	},

	async delete(context, item) {

	}
};

const getters = {
	items(state) {
		return state.items;
	},
	getItemById(state, uid) {
		return state.items.find(el => el.uid === uid);
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}
