<template>
	<div class="row">
		<div class="col-9 col-md-9">
			<p class="earnings__title">Twoje przychody:</p>
		</div>
		<div class="col-3 col-md-3">
			<div class="edit edit--color">
				<i class="edit--transformers fas fa-edit"></i>
			</div>
		</div>

		<div class="col-12 finance">
			<finance-item
				v-for="i in 50"
				:key="i"
				:title="'jakaś usługa ' + i"
				:prize="14.99"
			/>

			<div class="row summary summary__profits">
				<div class="o col-6 summary__profits--results">
					Podsumowanie
				</div>
				<div class="o col-5 summary__profits--money">900 PLN</div>
			</div>
		</div>
		<div class="col-12 col-md-12 add">
			<button class="button-add">Dodaj</button>
		</div>
	</div>
</template>

<script>
import FinanceItem from '@/components/FinanceItem'
export default {
	components: {
		FinanceItem,
	},
}
</script>

<style scoped lang="scss">
.earnings__title {
	font-size: 24px;
	padding: 20px 0;
}
.finance {
	background-color: rgb(48, 45, 45);
	border: 2px solid black;
	border-radius: 5px;
	height: 600px;
	overflow-y: auto;
	font-family: 'mukta-light';
	scrollbar-width: thin;
	display: flex;
	flex-direction: column;
	&-edit {
		position: absolute;
		left: 15px;
		display: none;
		cursor: pointer;
		&--active {
			display: block;
		}
	}
}
.summary {
	background-color: $green;
	height: 41px;
	font-size: 5px;
	text-align: center;
	align-items: center;
	justify-content: left;
	display: flex;
	position: sticky;
	bottom: 0;

	&__profits {
		background-color: #1f4d32d6;
		justify-content: space-between;
		display: flex;
		font-size: 25px;
		margin-top: auto;
		@include device-small {
			font-size: 20px;
			display: flex;
			align-items: center;
		}
		@media (max-width: 342px) and(min-width:320px) {
			font-size: 17px;
		}
		&--results {
			text-align: left;
		}
		&--money {
			text-align: right;
		}
		&--expenses {
			background: #880909cf;
		}
	}
}
</style>