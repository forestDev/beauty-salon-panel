<template>
	<div class="button" :class="classes" @click="$emit('click')">
		<slot />
		<i class="button__icon" :class="iconClass" />
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
		isSecondary: {
			type: Boolean,
			default: false,
		},
		isFinance: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		classes() {
			return {
				'button--sign-in': this.isSignIn,
				'button--menu': this.isMenu,
				'button--secondary': this.isSecondary,
				'button--finance': this.isFinance,
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
	padding: 12px 0;
	text-align: center;
	text-transform: uppercase;
	cursor: pointer;
	letter-spacing: 2px;
	background-color: $white;
	color: $black;
	user-select: none;
	box-sizing: border-box;
	&__icon {
		margin-left: 6px;
	}
	&--sign-in {
		background-color: #338F2C;
		color: $white;
		transition: all 0.25s ease-in-out;
		border-radius: 50px;

		&:hover {
			background-color: #315f2d;
		}
	}
	//button--menu
	&--menu {
		border: 1px solid gray;
		flex-direction: column-reverse;
		//background-image: linear-gradient(to top, #575050, #353131);
		box-shadow: 0px 0px 5px #7b7b7b63;
		transition: all 0.3s;
		padding: 10px;
		height: 70px;
		max-height: 70px;
		color: $white;
		background-color: #1f1f1f;
		&:hover {
			opacity: 0.8;
			box-shadow: 0px 0px 10px #7b7b7b;
		}
	}
	&--finance {
		border-radius: 16px;
		background-color: transparent;
		height: 30px;
		font-size: 14px;
		border: 1px solid $white;
		color: $white;
		&:hover {
			box-shadow: 0 0 40px #002699 inset;
		}
	}
	&--secondary {
		height: 40px;
		width: 100%;
		letter-spacing: 2px;
		font-size: 18px;
		color: $white;
		border-radius: 8px;
		border: 1px solid white;
		text-align: center;
		transition: box-shadow 150ms ease-in-out, color 150ms ease-in-out;
		background-color: $black;
		cursor: pointer;
		text-transform: uppercase;
		&:hover {
			box-shadow: 0 0 40px #002699 inset;
		}
	}
}
</style>