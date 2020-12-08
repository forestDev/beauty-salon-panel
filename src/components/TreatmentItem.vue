<template>
	<div class="treatment-item"
	:class="{'treatment-item--pointer': isEditState}"
	 @click="isEditState ? $emit('edit', id) : ''">
		<div class="treatment-item__box">
		<i v-if="isEditState" class="treatment-item__icon fas fa-edit"></i>
			{{ title }}
			</div>
		<div class="treatment-item__prize">
			{{ prize }}
		</div>
	</div>
</template>

<script>
export default {
	props: {
		id: {
			type: Number,
			required: true
		},
		title: {
			type: String,
			required: true,
		},
		prizeLow: {
			type: Number,
		},
		prizeHigh: {
			type: Number,
		},
		isEditState: {
			type: Boolean,
			default: false,
		}
	},
	computed: {
		prize() {
			if (this.prizeLow && this.prizeHigh) {
				return `${this.prizeLow} zł - ${this.prizeHigh} zł`
			} else {
				return `${this.prizeLow ? this.prizeLow : this.prizeHigh} zł`
			}
		},
	},
}
</script>

<style scoped lang="scss">
.treatment-item {
	border: 1px solid rgba(128, 128, 128, 0.226);
	border-radius: 4px;
	padding: 16px;
	display: flex;
	justify-content: space-between;
	margin-top: 12px;
	background: #161616;
	&--pointer {
	cursor: pointer;
	&:hover {
		background-color: lighten($color: #000000, $amount: 5%)
	}
	}
	&__prize {
		margin-left: 10px;
		white-space: nowrap;
	}
	&__box {
		display: flex;
	}
	&__icon {
		margin-right: 15px;
	}
}
</style>