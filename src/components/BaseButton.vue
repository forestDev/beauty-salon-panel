<template>
	<div class="button" :class="classes" @click="$emit('click')">
		<slot />
		<i :class="iconClass" />
	</div>
</template>

<script>
export default {
	props: {
		isSignIn: {
			type: Boolean,
			default: false,
		},
		isMenu: {
			type: Boolean,
			default: false,
		},
		iconClass: {
			type: String,
			default: '',
		},
	},
	computed: {
		classes() {
			return {
				'button--sign-in': this.isSignIn,
				'button--menu': this.isMenu,
				// others classes.
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.button {
	border: none;
	border-radius: $border-radius;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: $font-size-base;
	line-height: $line-height-base;
	padding: 15px 0;
	text-align: center;
	text-transform: uppercase;
	cursor: pointer;
	letter-spacing: 2px;
	background-color: $white;
	color: $black;
	user-select: none;
	box-sizing: border-box;

	&--sign-in {
		background-color: $green;
		color: $white;
		transition: all 0.25s ease-in-out;

		&:hover {
			background-color: darken($green, 10%);
		}
	}
	//button--menu
	&--menu {
		border: 1px solid gray;
		flex-direction: column-reverse;
		background-image: linear-gradient(to top, #575050, #353131);
		box-shadow: 0px 0px 5px #7b7b7b63;
		transition: all 0.3s;
		padding: 10px;
		height: 70px;
		max-height: 70px;
		color: $white;
		&:hover {
			opacity: 0.8;
			box-shadow: 0px 0px 10px #7b7b7b;
		}
	}
}
</style>