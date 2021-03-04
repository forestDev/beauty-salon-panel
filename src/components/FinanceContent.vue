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
				:prize="cost.prize"
				:date="cost.date"
				:showButtons="isEditing"
				:id="cost.id"
				@edit="editHandler($event)"
				@delete="deleteHandler($event)"
			/>
		</div>
		<div class="col-12">
			<div class="row finance__summary">
				<div class="o col-6 finance__summary-results">Podsumowanie</div>
				<div class="o col-5 finance__summary-money">900 PLN</div>
			</div>
			<div class="row controls">
				<div class="col-md-3 col-12">
					<base-button is-secondary @click="isAddFinance = true"
						>Dodaj</base-button
					>
				</div>
				<div class="col-md-3 col-12">
					<base-button
						@click="isEditing = !isEditing"
						is-secondary
						class="controls__edit"
						>{{ isEditing ? 'Anuluj' : 'Edytuj' }}</base-button
					>
				</div>
			</div>
		</div>

		<base-popup v-if="isAddFinance">
			<h4 slot="header">
				Dodaj {{ isExpense ? 'wydatek' : 'przychód' }}
			</h4>
			<template slot="content">
				<div class="row mat16">
					<div class="col-4">Rodzaj</div>
					<div class="col-8">
						<div class="finance-box__switch"></div>
						<toggle-button
							:color="{
								checked: '#b32217',
								unchecked: '#266842',
							}"
							v-model="isExpense"
							switch-color="#ffffff"
							:sync="true"
							:width="100"
							:height="30"
							:labels="{
								checked: 'Wydatek',
								unchecked: 'Przychód',
							}"
						/>
					</div>
				</div>
				<div class="row mat16">
					<div class="col-4 finance-box__prize">
						{{ isExpense ? 'Wydatek' : 'Przychód' }}
					</div>
					<div class="col-8 finance-box__input">
						<input
							class="finance-box__input-target"
							type="text"
							placeholder="Kwota"
						/>
					</div>
				</div>
				<div class="row mat16">
					<div class="col-4 finance-box__date">data</div>
					<div class="col-8 finance-box__input">
						<input class="finance-box__input-target" type="date" />
					</div>
				</div>
				<div class="row mat16">
					<div class="col-4 finance-box__description">opis</div>
					<div class="col-8 finance-box__input">
						<textarea
							class="finance-box__input-target"
							name=""
							id=""
							cols="30"
							rows="4"
						></textarea>
					</div>
				</div>
				<div class="row mat16">
					<div class="col-6">
						<base-button
							class="finance-box__btn finance-box__btn--negative"
							@click="isAddFinance = false"
							>Anuluj
						</base-button>
					</div>
					<div class="col-6">
						<base-button
							class="finance-box__btn finance-box__btn--positive"
							@click="isAddFinance = false"
							>Potwierdz
						</base-button>
					</div>
				</div>
			</template>
		</base-popup>
	</div>
</template>

<script>
import FinanceItem from '@/components/FinanceItem'
import BaseButton from '@/components/BaseButton'
import BasePopup from '@/components/BasePopup'
// for test.
import moment from 'moment'
export default {
	components: {
		FinanceItem,
		BaseButton,
		BasePopup,
	},
	data() {
		return {
			isEditing: false,
			isAddFinance: false,
			isExpense: true,
			// from api.
			costs: [
				{
					id: 1,
					title: 'Odsysanie tłuszczu',
					date: moment(),
					prize: 15.99,
				},
				{
					id: 2,
					title: 'Powiększanie penisa',
					date: moment(),
					prize: 105.99,
				},
				{
					id: 3,
					title: 'Zakup kosmetyków',
					date: moment(),
					prize: -25,
				},
				{
					id: 4,
					title: 'Malowanie buzi',
					date: moment(),
					prize: 5,
				},
			],
		}
	},
	methods: {
		editHandler(event) {
			let id = this.costs.findIndex((cost) => cost.id === event.id)
			this.costs.splice(id, 1)
			this.costs.push(event)
		},
		deleteHandler(id) {
			let idx = this.costs.findIndex((cost) => cost.id === id)
			this.costs.splice(idx, 1)
		},
	},
}
</script>

<style scoped lang="scss">
.mat16 {
	margin-top: 16px;
}
.title {
	font-size: 24px;
	padding: 20px 0;
}
.finance {
	background-color: #1f1f1f;
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
			color: #1f1f1f;
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
.popup {
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	position: fixed;
	display: flex;
	background-color: #0000009e;
}
.popup-finance {
	top: 50%;
	position: fixed;
	left: 50%;
	transform: translate(-50%, -50%);
	border: 1px solid white;
	border-radius: 8px;
	background-color: #161616;
	max-width: 320px;
	@media (min-width: 460px) {
		max-width: unset;
	}
}
.finance-box {
	&__btn {
		background-color: $black;
		padding: 4px;
		&--positive {
			color: $green;
			border: 1px solid $green;
		}

		&--negative {
			color: $red;
			border: 1px solid $red;
		}
	}
	&__input-target {
		border: 0;
		outline: none;
		background-color: #161616;
		color: $white;
		border-bottom: 1px solid #494949;
		resize: none;
	}
}

.finance-box__input {
	display: flex;
}
input {
	overflow: hidden;
	width: 100%;
}
</style>