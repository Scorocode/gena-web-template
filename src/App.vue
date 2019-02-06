<template>
    <div class="flex-fill d-flex flex-column" id="app">
        <app-header v-if="$router.currentRoute.path !== '/signin'"></app-header>
        <div class="flex-fill d-flex">
            <div class="p-3 bg-light" style="width: 200px">
                <h5>Endpoints</h5>
                <b-nav vertical>
                    <b-nav-item v-for="(item, index) in routes"
                                :key="index"
                                :to="item.path">{{ item.name }}</b-nav-item>
                </b-nav>
            </div>
            <router-view></router-view>
        </div>
        <app-footer v-if="$router.currentRoute.path !== '/signin'"></app-footer>
    </div>
</template>

<script>
	import Header from './components/MainHeader.vue'
	import Footer from './components/MainFooter.vue'

	export default {
		components: {
			appHeader: Header,
			appFooter: Footer,
		},
        data() {
			return {
				routes: [
					// SC_ROUTES
                ]
            }
        }
	}
</script>

<style>
    html, body {
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
        display: flex;
    }

    .nav-link {
        color: darkslategray;
    }
    .nav-link.active {
        color: blue;
    }
</style>
