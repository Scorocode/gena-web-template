<template>
    <transition name="modal">
        <div class="modal-mask d-flex justify-content-center align-items-center">
            <div class="modal-container d-flex flex-column">
                <div class="modal-header align-items-center">
                    <h5>{{ header }}</h5>
                </div>
                <div class="modal-body d-flex flex-column flex-fill" :class="textClass">
                    {{ text }}
                </div>
                <div class="modal-footer align-items-center">
                    <button class="btn btn-primary"
                            @click="$emit('modalOk')">
                            Close
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
	export default {
		props: {
			header: String,
			text: String,
            textClass: String,
        },
		data() {
			return {}
		}
	}
</script>

<style scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        transition: opacity .1s ease;
    }

    .modal-container {
        width: 600px;
        padding: 0 20px 0 20px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .1s ease;
    }

    .modal-header {
        height: 70px;
        padding: 0;
    }

    .modal-body {
        padding: 10px 0 10px 0;
    }

    .modal-footer {
        height: 70px;
        padding: 0;
    }

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>
