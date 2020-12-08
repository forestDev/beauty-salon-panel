<template>
	<div class="popup">
		<div class="popup-content">
			<div class="popup__wrapper">
				<div
					class="popup__close-btn"
					@click="$emit('close')"
					v-if="withClose"
				>
					<i class="fas fa-times" />
				</div>
				<div class="row popup__wrapper-title">
					<div class="col-12">
						<slot name="header" />
					</div>
				</div>
				<slot name="content" />
			</div>
		</div>
	</div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
	props: {
		withClose: {
			type: Boolean,
			default: false,
		},
	},
	created() {
		this.setIsModal(true)
	},
	beforeDestroy() {
		this.$emit('destroy')
		this.setIsModal(false)
	},
	methods: {
		...mapMutations(['setIsModal']),
	},
}
</script>
<style scoped lang="scss">
.popup {
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	position: fixed;
	display: flex;
	background-color: #0000009e;
	&__wrapper {
		height: 50%;
		border-radius: 16px;
		padding: 24px;
		position: relative;
		&-title {
			text-align: center;
			padding-bottom: 12px;
		}
	}
	&__close-btn {
		position: absolute;
		right: 15px;
		top: 15px;
		cursor: pointer;
	}
}
.popup-content {
	top: 50%;
	position: fixed;
	left: 50%;
	transform: translate(-50%, -50%);
	border: 1px solid white;
	border-radius: 8px;
	background-color: #161616;
	min-width: 305px;
	max-width: 500px;
}
</style>