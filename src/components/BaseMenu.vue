<template>
	<div class="menu" id="menu">
		<base-button
			class="menu__btn"
			isMenu
			icon-class="menu__btn-icon fas fa-home"
			>Strona<br />
			główna</base-button
		>
		<base-button
			class="menu__btn"
			isMenu
			icon-class="menu__btn-icon fas fa-calendar-alt"
			>Terminarz</base-button
		>
		<base-button
			class="menu__btn"
			isMenu
			icon-class="menu__btn-icon fas fa-dollar-sign"
			>Finanse</base-button
		>
		<base-button
			class="menu__btn"
			isMenu
			icon-class="menu__btn-icon fas fa-users"
			>Klienci</base-button
		>
		<base-button
			class="menu__btn"
			isMenu
			icon-class="menu__btn-icon fas fa-align-left"
			>Zabiegi</base-button
		>
		<base-button
			class="menu__btn"
			isMenu
			icon-class="menu__btn-icon fas fa-cogs"
			>Ustawienia</base-button
		>
		<base-button
			class="menu__btn"
			isMenu
			icon-class="menu__btn-icon fas fa-power-off"
			>Wyloguj</base-button
		>
	</div>
</template>

<script>
import BaseButton from '@/components/BaseButton'

export default {
	components: {
		BaseButton,
	},
}
</script>

<style scoped lang="scss">
.menu {
	border: 1px solid gray;
	border-left: none;
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 70px;
	left: 0;
	z-index: 999;
	width: 80%;
	transition: all 0.6s;
	background-color: rgb(23, 23, 31);
	border-bottom-right-radius: 5px;
	border-top-right-radius: 5px;
	padding: 15px;
	height: calc(100vh - 70px);
	box-sizing: border-box;
	&__btn {
		margin: 5px 0;
		font-size: 12px;
		flex-direction: row;
		max-height: unset;
		height: 100%;
		@include device-medium {
			& {
				font-size: 14px;
			}
		}
	}
	@include device-medium {
		width: 35%;
	}
	@include device-large {
		width: 25%;
	}
}
/deep/ .menu__btn-icon {
	margin-left: 8px;
	font-size: 20px;
	color: $white;
}
</style>