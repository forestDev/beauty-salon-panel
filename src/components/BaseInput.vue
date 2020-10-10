<template>
	<input
		class="input"
		:type="inputType"
		:placeholder="placeholder"
		:value="value"
		@input="$emit('input', $event.target.value)"
	/>
</template>

<script>
export default {
	props: {
		value: {
			type: String,
			required: true,
		},
		placeholder: {
			type: String,
			default: '',
		},
		inputType: {
			type: String,
			default: 'text',
		},
	},
}
</script>

<style scoped lang="scss">
.input {
	background-color: $white;
	border: none;
	border-radius: $border-radius;
	font-size: ($font-size-base)-2px;
	line-height: $line-height-sm;
	outline: none;
	box-sizing: border-box;
	height: 48px;
	width: 100%;
	padding-left: 15px;
	&::placeholder {
		color: $black;
	}

	&::-moz-placeholder {
		color: $black;
		opacity: 0.25;
	}

	&:-ms-placeholder {
		color: $black;
	}
}
</style>