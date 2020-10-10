<template>
	<div class="row">
		<div class="col-12">
			<p class="title">Twoje finanse:</p>
		</div>

		<div class="col-12 finance">
			<finance-item
				v-for="cost in costs"
				:key="cost.id"
				:title="cost.title"
				:prize="cost.price"
				:date="cost.date"
				:showButtons="isEditing"
				@edit="cost = $event"
			/>

			<div class="row finance__summary">
				<div class="o col-6 finance__summary-results">Podsumowanie</div>
				<div class="o col-5 finance__summary-money">900 PLN</div>
			</div>
		</div>
		<div class="col-12">
			<div class="row controls">
				<div class="col-md-3 col-12">
					<base-button is-secondary>Dodaj</base-button>
				</div>
				<div class="col-md-3 col-12">
					<base-button
						@click="isEditing = !isEditing"
						is-secondary
						class="controls__edit"
						>Edytuj</base-button
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import FinanceItem from '@/components/FinanceItem'
import BaseButton from '@/components/BaseButton'
// for test.
import moment from 'moment'
export default {
	components: {
		FinanceItem,
		BaseButton,
	},
	data() {
		return {
			isEditing: false,
			// from api.
			costs: [
				{
					id: 1,
					title: 'Odsysanie tłuszczu',
					data: moment(),
					price: 15.99,
				},
				{
					id: 2,
					title: 'Powiększanie penisa',
					data: moment(),
					price: 105.99,
				},
				{
					id: 3,
					title: 'Zakup kosmetyków',
					data: moment(),
					price: -25,
				},
				{
					id: 4,
					title: 'Malowanie buzi',
					data: moment(),
					price: 5,
				},
			],
		}
	},
}
</script>

<style scoped lang="scss">
.title {
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
	&__summary {
		padding: 6px 0;
		height: 41px;
		text-align: center;
		align-items: center;
		justify-content: left;
		display: flex;
		position: sticky;
		bottom: 0;
		background-color: #000000e6;
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
		&-results {
			text-align: left;
		}
		&-money {
			text-align: right;
		}
		&--expenses {
			background: #880909cf;
		}
	}
}
.controls {
	justify-content: space-between;
	margin-top: 16px;
	&__edit {
		margin-top: 16px;
		margin-bottom: 24px;
		@include device-medium {
			margin-top: 0;
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
	}
}
</style>