<template>
	<div class="stat-box">
		<div class="row">
			<div class="col-12 col-md-12 stat-box__header">
				<p class="stat-box__header-title">{{ title }}</p>
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
	background-color: #1f1f1f;
	padding: 16px;
	height: unset;

	margin: auto;
	font-family: 'cinzel';
	&__header {
		display: flex;
		justify-content: center;
		&-title {
			font-size: 24px;
			margin-bottom: 25px;
			padding-bottom: 12px;
			display: inline;
			text-align: center;
			padding-left: 40px;
			padding-right: 40px;
			text-align: center;
			border-bottom: 2px solid #ffffff;
		}
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