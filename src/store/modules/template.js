import api from '../../api';
import { processError } from '../utils';

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
		context.commit('error/clear', null, {root: true});

		await api.get('/SC_ENDPOINT_ROUTE')
			.then((response) => {
				context.commit('set', response.data.items);
			})
			.catch((error) => {
				processError(context, error);
			});
	},

	async add(context, item) {
		context.commit('error/clear', null, {root: true});

		await api.post('/SC_ENDPOINT_ROUTE', item)
			.then((response) => {
				context.commit('add', response.data);
			})
			.catch((error) => {
				processError(context, error);
			});
	},

	async update(context, item) {
		context.commit('error/clear', null, {root: true});

		await api.post('/SC_ENDPOINT_ROUTE/' + item.ref, item)
			.then((response) => {
				context.commit('update', response.data);
			})
			.catch((error) => {
				processError(context, error);
			});
	},

	async delete(context, item) {
		context.commit('error/clear', null, {root: true});

		await api.delete('/SC_ENDPOINT_ROUTE/' + item.ref)
			.then(() => {
				context.commit('delete', item);
			})
			.catch((error) => {
				processError(context, error);
			});
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
