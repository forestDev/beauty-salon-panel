<template>
	<div class="stat-box">
		<div class="row">
			<div class="col-12 col-md-12">
				<p class="stat-box__title">{{ title }}</p>
			</div>
			<slot />
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
	},
}
</script>

<style scoped lang="scss">
.stat-box {
	background-color: #131111;
	border-radius: 4px;
	padding: 16px;
	height: unset;
	margin: auto;
	border: 2px solid rgb(121, 104, 104);
	box-shadow: 0px 0px 10px 5px #3d4346;
	font-family: 'cinzel';
	&__title {
		font-size: 24px;
		margin-bottom: 25px;
		padding-bottom: 12px;
		border-bottom: 1px solid #3d4346;
	}
	@include device-large {
		& {
			padding: 32px;
			margin: unset;
			height: 100%;
		}
	}
}
</style>