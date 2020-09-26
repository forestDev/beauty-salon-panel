<template>
	<div class="treatment-item">
		<div>{{ title }}</div>
		<div class="treatment-item__prize">
			{{ prize }}
		</div>
	</div>
</template>

<script>
export default {
	props: {
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
	},
	data() {
		return {
			isEditing: false,
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
	&__prize {
		margin-left: 10px;
		white-space: nowrap;
	}
}
</style>