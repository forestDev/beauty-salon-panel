<template>
	<div
		class="row finance-item"
		:class="{ 'finance-item--negative': isNegative }"
	>
		<!-- <div class="col-1">
			<div>
				<i
					v-if="showButtons"
					class="finance-item__prize-edit far fa-edit"
				/>
				<i
					v-if="showButtons"
					class="finance-item__prize-delete far fa-trash-alt"
				/>
			</div>
		</div> -->
		<div class="col-4 col-md-5">
			<div class="row">
				<div class="col-12 col-md-6">
					{{ date.format('DD/MM/YYYY') }}
				</div>
				<div class="col-md-6 col-12 finance-item__prize">
					<p v-if="!isEditing">{{ prize }}zł</p>
				</div>
			</div>
		</div>
		<div class="col-8 col-md-7 finance-item__description">
			<p>
				{{ title }}
			</p>
		</div>
		<div class="col-12 col-md-7" v-if="showButtons">
			<div class="row">
				<div class="col-6">
					<base-button isFinance iconClass="far fa-edit"
						>Edytuj</base-button
					>
				</div>
				<div class="col-6">
					<base-button is-finance iconClass="far fa-trash-alt"
						>Usuń</base-button
					>
				</div>
			</div>
		</div>
		<!-- <div class="col-md-3 col-6">
		</div>
		<div class="col-md-3 col-6 finance-item__prize">
			<base-input
				v-else
				:value="String(prize)"
				@input="editingPrize = $event.target.value"
			></base-input>
		</div>

		<div class="col-12 col-md-6 finance-item__description">
			<template v-if="!isEditing">
				{{ title }}
			</template>
			<template v-else>
				<base-input
					:value="title"
					@input="editingPrize = $event.target.value"
				></base-input>
			</template> -->
	</div>
	<!-- <div class="col-7 col-md-3 finance-item__date">
			<template v-if="!isEditing">
				{{ date.format('DD/MM/YYYY') }}
			</template>
			<template v-else> -->
	<!-- <base-input
					:value="date"
					@input="editingPrize = $event.target.value"
				></base-input> -->
	<!-- </template>
		</div> -->
	<!-- </div> -->
</template>

<script>
import moment from 'moment'
// import BaseInput from '@/components/BaseInput'
import BaseButton from '@/components/BaseButton'
export default {
	data() {
		return {
			isEditing: false,
		}
	},
	components: {
		// BaseInput,
		BaseButton,
	},
	props: {
		title: {
			type: String,
			required: true,
		},
		date: {
			type: Object,
			default: () => moment(),
		},
		prize: {
			type: Number,
			required: true,
		},
		showButtons: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		isNegative() {
			return this.prize < 0
		},
	},
}
</script>

<style scoped lang="scss">
.finance-item {
	margin-top: 10px;
	position: relative;
	background-color: $green;
	text-align: left;
	font-size: 17px;
	padding: 10px 0;
	line-height: 1.6;
	@include device-small {
		padding: 15px 0;
	}
	&__prize {
		align-items: center;
		display: flex;
		font-weight: bold;
		font-size: 20px;
	}
	&__description {
		align-items: center;
		display: flex;

		&-edit {
			margin-left: 5px;
		}
	}
	&__date {
		align-items: center;
		display: flex;
		justify-content: center;
	}
	&--negative {
		background: $red;
	}
}
</style>