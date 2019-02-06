<template>
    <div class="flex-fill p-3">
        <div class="btn-toolbar mb-3 justify-content-between align-items-center" role="toolbar">
            <h4>SC_ENDPOINT_TITLE</h4>
            <button type="button" class="btn btn-outline-primary" @click="onNew">+ New</button>
        </div>
        <table class="table table-striped table-hover">
            <thead>
            <tr>
                SC_ENDPOINT_TABLE_HEADERS
            </tr>
            </thead>
            <tbody>
            <template v-for="(item, index) in items">
                <tr :key="index">
                    SC_ENDPOINT_TABLE_ROWS
                    <td class="ml-3" width="150">
                        <button class="btn btn-sm btn-light"
                                @click.prevent="onEdit">Edit</button>
                        <button class="btn btn-sm btn-danger ml-3"
                                @click.prevent="onDelete">Delete</button>
                    </td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>
	import {mapGetters, mapActions, mapMutations} from 'vuex';

	export default {
		data() {
			return {
				showModal: false,
			}
		},
		computed: {
			...mapGetters('SC_ENDPOINT_ROUTE', [
				'items',
			]),
		},
		methods: {
			...mapActions('SC_ENDPOINT_ROUTE', [
				'getAll',
				'add',
				'update',
				'delete'
			]),

			...mapMutations('error', {
				clearError: 'clear'
			}),

			onNew() {
				this.clearError();

				this.add().then(() => {

				});

			},

			onEdit() {

			},

			onDelete() {

			},
		},
		created() {
			this.getAll();
		}
	}
</script>

<style scoped>

</style>
