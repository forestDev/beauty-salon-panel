<template>
	<input
		class="input"
		:class="{
			'input--error': error,
			'input--shadow': shadow,
		}"
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
		error: {
			type: Boolean,
			default: false,
		},
		shadow: {
			type: Boolean,
			default: false,
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
	padding-right: 15px;
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
	&--error {
		border-radius: 6px !important;
		border: 2px solid $red !important;
	}
	&--shadow {
		border: 0;
		border-radius: 0;
		outline: none;
		background-color: #161616;
		color: $white;
		border-bottom: 1px solid #494949;
		resize: none;
		&--error {
			border-bottom: 1px solid $red;
		}
		&::placeholder {
			color: $white;
		}

		&::-moz-placeholder {
			color: $white;
			opacity: 0.25;
		}

		&:-ms-placeholder {
			color: $white;
		}
	}
}
</style>