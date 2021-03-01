<template>
	<div
		class="row finance-item finance-item--colororgreen"
		:class="{ 'finance-item--negative finance-item--colorred': isNegative }"
	>
		<div class="col-md-5" :class="[isEditing ? 'col-12' : 'col-4']">
			<div class="row">
				<div class="col-12 col-md-6 finance-item__date">
					<template v-if="!isEditing">
						{{ date.format('DD/MM/YYYY') }}
					</template>
					<base-input
						class="finance-item__input"
						input-type="date"
						v-model="editData.date"
						v-else
						:error="errors.date"
					/>
				</div>
				<div class="col-md-6 col-12 finance-item__prize">
					<p v-if="!isEditing">{{ prize }}zł</p>
					<base-input
						class="finance-item__input"
						v-model="editData.prize"
						:error="errors.prize"
						v-else
					/>
				</div>
			</div>
		</div>
		<div
			class="col-md-7 finance-item__description "
			:class="[isEditing ? 'col-12' : 'col-8']"
		>
			<p v-if="!isEditing">
				{{ title }}
			</p>
			<base-input
				class="finance-item__input"
				v-model="editData.title"
				v-else
				:error="errors.title"
			/>
		</div>
		<div class="col-12" v-if="showButtons">
			<div class="row">
				<div class="col-12">
					<div class="finance-item__line" />
				</div>
				<div class="col-6">
					<base-button
						@click="actionButton"
						isFinance
						class="finance-item__button"
						iconClass="far fa-edit"
						>{{ isEditing ? 'Zapisz' : 'Edytuj' }}</base-button
					>
				</div>
				<div class="col-6">
					<base-button
						class="finance-item__button"
						is-finance
						iconClass="far fa-trash-alt"
						@click="$emit('delete', id)"
						>Usuń</base-button
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import moment from 'moment'
import BaseInput from '@/components/BaseInput'
import BaseButton from '@/components/BaseButton'
export default {
	data() {
		return {
			isEditing: false,
			editData: {
				title: this.title,
				date: this.date.clone().format('YYYY-MM-DD'),
				prize: String(this.prize),
				id: this.id,
			},
			errors: {
				prize: false,
				date: false,
				title: false,
			},
		}
	},
	components: {
		BaseInput,
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
		id: {
			type: Number,
			required: true,
		},
	},
	computed: {
		isNegative() {
			return this.prize < 0
		},
	},
	methods: {
		actionButton() {
			if (this.isEditing) {
				this.errors.date =
					moment(this.editData.date).valueOf() > moment().valueOf()
				this.errors.prize = !Boolean(
					Number.parseFloat(this.editData.prize)
				)
				for (let error of Object.values(this.errors)) {
					if (error) return
				}
				this.editData = {
					...this.editData,
					date: moment(this.editData.date),
					prize: Number.parseFloat(this.editData.prize),
				}
				this.isEditing = false
				this.$emit('edit', this.editData)
			} else {
				this.isEditing = true
			}
		},
	},
}
</script>

<style scoped lang="scss">
.finance-item {
	margin-top: 10px;
	position: relative;
	background-color: $green3;
	text-align: left;
	font-size: 17px;
	padding: 10px 0;
	line-height: 1.6;
	@include device-small {
		padding: 15px 0;
	}
	&--colororgreen{
		color: $green4;
	}
	&--colorred{
		color: $red3;
	}
	&__prize {
		align-items: center;
		display: flex;
		font-size: 20px;
		font-style: italic;
	}
	&__description {
		align-items: center;
		display: flex;
		font-weight: bold;
		
		&-edit {
			margin-left: 5px;
		}
		
	}
	&__date {
		display: flex;
	}
	&--negative {
		background: $red2;
		
		
	}
	&__line {
		border-top: 1px solid $white;
		margin: 15px 0;
	}
	&__input {
		height: 40px;
		margin: 5px 0;
		background-color: #00000075;
		border: 1px solid white;
		color: white;
	}

	&__button {
		transition: background 0.3s;
		&:hover {
			box-shadow: none;
			background-color: #00000075;
		}
	}
}
</style>