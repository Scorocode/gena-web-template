<template>
    <div class="flex-fill d-flex flex-column p-3 justify-content-center align-items-center align-content-center">
        <div class="card w-50">
            <div class="card-header">
                Sign in
            </div>
            <div class="card-body">
                <form @submit.prevent="doSignin">
                    <div class="form-group">
                        <label for="inputEmail">Email</label>
                        <input type="email"
                               class="form-control"
                               id="inputEmail"
                               aria-describedby="emailHelp"
                               placeholder="Enter email"
                               v-model="email">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                            else.
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="inputPassword">Password</label>
                        <input
                                type="password"
                                class="form-control"
                                id="inputPassword"
                                placeholder="Password"
                                v-model="password">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            <div class="card-footer text-danger" v-if="lastError">{{ lastError }}</div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

	export default {
		data() {
			return {
				email: '',
                password: ''
			}
		},
        computed: {
            ...mapGetters('error', [
                'lastError'
            ])
        },
		methods: {
			...mapActions('auth', [
				'signIn'
            ]),

			doSignin() {
				this.signIn({
                    email: this.email,
                    password: this.password
                });
            }
        }
	}
</script>
