<template>
	<div id="app" class="h100">
		<main-header v-if="$route.name != 'loginPage'" />
		<div class="container background-app">
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
	border-top: none;
	border-bottom: none;
	height: 100%;
}
</style>