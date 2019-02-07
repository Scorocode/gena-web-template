export function processError(context, error) {
	if (error.response) {
		context.commit('error/setError', error.response, {root:true});
	} else {
		context.commit('error/setError', error, {root:true});
	}

	if (error.response && error.response.status === 403) {
		context.dispatch('auth/signOut', {}, {root:true});
	}
}
