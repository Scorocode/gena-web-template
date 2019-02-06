<template>
    <div>
        <info-modal v-if="lastError && showInfoModal"
                    header="Error detail"
                    :text="errorText"
                    textClass="text-danger"
                    @modalOk="showInfoModal = false">
        </info-modal>

        <div class="bg-light d-flex flex-row justify-content-between align-items-center p-1">
            <div class="text-dark"><small>Scorocode</small></div>
            <div class="error-area">
                <a href="" class="text-danger" @click.prevent="showInfoModal = true"><small>{{ errorText }}</small></a>
            </div>
        </div>
    </div>
</template>

<script>
    import InfoModal from './InfoModal.vue';

	import {mapGetters, mapActions} from 'vuex';

	export default {
		components: {
			InfoModal
        },
        data() {
			return {
				showInfoModal: false
            }
        },
		computed: {
			...mapGetters('error', [
				'lastError'
			]),
            errorText() {
				return this.lastError ? this.lastError.status + ' ' + this.lastError.statusText + ': ' + this.lastError.data : ''
            }
		},
        methods: {
			...mapActions('error', [
				'clear',
                'setError'
            ])
        }
	}

</script>

<style scoped>
    .error-area {
        max-width: 500px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>
