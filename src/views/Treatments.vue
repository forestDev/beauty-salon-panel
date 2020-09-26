<template>
	<div class="row treatments">
		<div class="col-12 col-md-6">
			<treatment-item
				v-for="i in 10"
				:key="i"
				title="Peeling kawitacyjny z maską"
				:prizeLow="40"
				:prizeHigh="60"
			/>
		</div>
	</div>
</template>

<script>
import TreatmentItem from '@/components/TreatmentItem'
export default {
	components: {
		TreatmentItem,
	},
}
</script>

<style scoped lang="scss">
.treatments {
	padding: 32px 0;
	@include device-medium {
		justify-content: center;
	}
}
</style>