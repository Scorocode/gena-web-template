import Vue from 'vue';
import Vuex from 'vuex';

import error from './modules/error';
import auth from './modules/auth';

// SC_MODULES_IMPORTS

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		error,
		auth,
		// SC_MODULES
	}
})
