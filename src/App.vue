<template>
	<div id="app" class="h100">
		<div class="container background-app">
			<main-header v-if="$route.name != 'loginPage'" />
			<router-view />
		</div>
	</div>
</template>
<script>
import MainHeader from '@/components/MainHeader'
export default {
	components: {
		MainHeader,
	},
}
</script>
<style lang="scss" scoped>
.background-app {
	background: $black;
	border: 1px solid rgb(90, 90, 90);
	border-top: none;
	border-bottom: none;
	box-shadow: 0px 0px 25px 3px #3d4346;
	overflow-x: hidden;
	height: 100%;
}
</style>