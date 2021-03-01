<template>
	<div>
		<div class="row">
			<div class="col-12">
				<h1>Moje usługi:</h1>
			</div>
		</div>
		<div class="row treatments">
			<div class="col-12">
				<treatment-item
					v-for="i in 20"
					:key="i"
					title="Golenie jąder"
					:prize-low="40"
					:prize-hight="60"
					:is-edit-state="isEditState"
					:id="i"
					@edit="onEdit"
				/>
			</div>
		</div>
		<base-popup class="treatment-popup" v-if="isAdd" with-close @close="isAdd = false">
			<h3 slot="header">Dodanie usługi</h3>
			<template #content>
				<div class="popup__treatment-box">
					<p>Nazwa usługi</p>
					<base-input shadow v-model="treatmentName" />
				</div>
				<div class="popup__treatment-box">
					<p>Minimalna cena:</p>
					<base-input shadow v-model="treatmentMinPrice" />
				</div>
				<div class="popup__treatment-box">
					<p>Maksymalna cena:</p>
					<base-input shadow v-model="treatmentMaxPrice" />
				</div>
				<div class="popup__actions">
					<base-button>Anuluj</base-button>
					<base-button>Dodaj</base-button>
				</div>
			</template>
		</base-popup>
		<base-popup class="treatment-popup" v-if="isEditingTreatment" with-close @close="isEditingTreatment = false">
			<h3 slot="header">Edycja usługi</h3>
			<template #content>
				<div class="popup__treatment-box">
					<p>Nazwa usługi</p>
					<base-input shadow v-model="editingTreatment.name" />
				</div>
				<div class="popup__treatment-box">
					<p>Minimalna cena:</p>
					<base-input shadow v-model="editingTreatment.minPrice" />
				</div>
				<div class="popup__treatment-box">
					<p>Maksymalna cena:</p>
					<base-input shadow v-model="editingTreatment.maxPrice" />
				</div>
				<div class="popup__actions">
					<base-button>Anuluj</base-button>
					<base-button>Potwierdz</base-button>
				</div>
				<div class="row popup__delete">
					<div class="col-12">
						<base-button>Usuń</base-button>
					</div>
				</div>

			</template>
		</base-popup>
		<div class="row treatments__controls">
			<div class="col-md-4 col-12">
				<base-button is-secondary @click="isAdd = true"
					>Dodaj</base-button
				>
			</div>
			<div class="col-md-4 col-12 treatments__controls-edit">
				<base-button is-secondary @click="isEditState = !isEditState">Edytuj</base-button>
			</div>
		</div>
	</div>
</template>

<script>
import TreatmentItem from '@/components/TreatmentItem'
import BaseButton from '@/components/BaseButton'
import BasePopup from '@/components/BasePopup'
import BaseInput from '@/components/BaseInput'
export default {
	components: {
		TreatmentItem,
		BaseButton,
		BasePopup,
		BaseInput,
	},
	data() {
		return {
			isAdd: false,
			treatmentName: '',
			treatmentMinPrice: '',
			treatmentMaxPrice: '',
			isEditState: false,
			editingTreatment: null,
			isEditingTreatment: false
		}
	},
	methods: {
		onEdit(id) {
			this.editingTreatment = {name: 'jakas usluga', minPrice: '12.44', maxPrice: '40'}
			this.isEditingTreatment = true
		}
	}
}
</script>

<style scoped lang="scss">
.treatments {
	margin-top: 16px;
	margin-bottom: 32px;
	height: 600px;
	overflow: auto;
	scrollbar-width: thin;
	background-color: #1f1f1f;
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
.popup__treatment-box {
	margin-top: 16px;
}
.popup__actions {
	display: flex;
	justify-content: space-between;
	margin: 0 -15px;
	div {
		width: 100%;
		margin: 24px 15px 0 15px;
	}
}
.popup__delete {
	margin-top: 15px;
}
.treatment-popup ::v-deep .popup-content {
	width: 60%;
}
</style>