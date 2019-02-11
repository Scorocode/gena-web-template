<template>
    <div class="flex-fill p-3">
        <b-form @reset="onReset" @submit="onSubmit" v-if="show && this.item">
            <b-row :key="key" class="my-1" v-for="(value, key) in item">
                SC_ENDPOINT_FIELDS
            </b-row>
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
    </div>
</template>

<script>
	import {mapGetters, mapActions, mapMutations} from 'vuex';

	export default {
		data() {
			return {
				item: null,
				show: true
			}
		},
		computed: {
			...mapGetters('SC_ENDPOINT_ROUTE', [
				'getItemById'
			])
		},
		methods: {
			...mapActions('SC_ENDPOINT_ROUTE', [
				'update',
			]),

			...mapMutations('error', {
				clearError: 'clear'
			}),

			onSubmit(evt) {
				evt.preventDefault();
				alert(JSON.stringify(this.item));
			},
			onReset(evt) {
				evt.preventDefault();

				this.item = {};

				this.show = false;
				this.$nextTick(() => {
					this.show = true
				});
			}
		},
		created() {
			this.item = this.getItemById(this.$route.params.item_id);
		}
	}
</script>

<style scoped>

</style>
