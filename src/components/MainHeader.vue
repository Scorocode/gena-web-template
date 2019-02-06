<template>
    <b-navbar toggleable="md" type="light" variant="light">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand to="/"><img alt="Scorocode logo" src="../assets/sc_logo_mini.png"></b-navbar-brand>

        <b-collapse id="nav_collapse" is-nav>

            <b-navbar-nav>
                <!--SC_NAV_ITEMS-->
                <!--
                                <b-nav-item to="/route_path">route name</b-nav-item>
                -->
                <b-nav-item to="/">Home</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown :text="user ? user.email : ''" right>
                    <b-dropdown-item href="#">Profile</b-dropdown-item>
                    <b-dropdown-item @click.prevent="signOut">Signout</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex';

	export default {
		computed: {
			...mapGetters('auth', [
				'user'
			])
		},
		methods: {
			...mapActions('auth', [
				'signOut'
			]),
		}
	}
</script>

<style scoped>

</style>
