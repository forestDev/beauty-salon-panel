<template>
	<div>
		<div class="row">
			<div class="col-12">
				<h1>Cennik:</h1>
			</div>
		</div>
		<div class="row treatments">
			<div class="col-12">
				<treatment-item
					v-for="i in 20"
					:key="i"
					title="Peeling kawitacyjny z maską"
					:prizeLow="40"
					:prizeHigh="60"
				/>
			</div>
		</div>
		<div class="row treatments__controls">
			<div class="col-md-4 col-12">
				<base-button is-secondary>Dodaj</base-button>
			</div>
			<div class="col-md-4 col-12 treatments__controls-edit">
				<base-button is-secondary>Edytuj</base-button>
			</div>
		</div>
	</div>
</template>

<script>
import TreatmentItem from '@/components/TreatmentItem'
import BaseButton from '@/components/BaseButton'
export default {
	components: {
		TreatmentItem,
		BaseButton,
	},
}
</script>

<style scoped lang="scss">
.treatments {
	margin-top: 16px;
	margin-bottom: 32px;
	height: 600px;
	overflow: auto;
	scrollbar-width: thin;
	&__controls {
		justify-content: space-between;
		padding: 0 15px;
		margin-bottom: 24px;
		&-edit {
			margin-top: 16px;
			margin-bottom: 24px;
			@include device-medium {
				margin-bottom: 0;
				margin-top: 0;
			}
		}
	}
	@include device-medium {
		justify-content: center;
	}
}
</style>