<template>
	<div>
		<div class="row">
			<div class="col-12 col-md-7 client-header">
				<div class="label">Baza klientów</div>
			</div>
			<div class="col-12 col-md-5 client-header client-header--right">
				<div class="search-box">
					<clients-search placeholder="Znajdź klientów" />
				</div>
			</div>
		</div>
		<clients-content :isEditState.sync="isEditState" />
		<div class="row">
			<div class="col-12">
				<div class="row clients-button">
					<div
						class="col-md-4 col-12 clients-button--mobile-margin-top"
					>
						<base-button
							is-secondary
							@click="isAddClient = !isAddClient"
							>Dodaj</base-button
						>
					</div>
					<div
						class="col-md-4 col-12 clients-button--mobile-margin-top"
					>
						<base-button
							is-secondary
							@click="isEditState = !isEditState"
							>Edytuj</base-button
						>
					</div>
				</div>
			</div>
		</div>
		<base-popup v-if="isAddClient">
			<h4 slot="header">Dodaj klienta</h4>
			<template slot="content">
				<base-input shadow v-model="name" placeholder="Imię" />
				<base-input shadow v-model="surname" placeholder="Nazwisko" />
				<base-input shadow v-model="description" placeholder="Opis" />
				<base-input
					shadow
					v-model="phoneNr"
					placeholder="Numer telefonu"
				/>
				<div class="col-12">
					<div class="row popup__buttons">
						<div class="col-12 col-lg-4">
							<base-button @click="cancel()">Anuluj</base-button>
						</div>
						<div class="col-12 col-lg-4">
							<base-button @click="addClient()"
								>Dodaj</base-button
							>
						</div>
					</div>
				</div>
			</template>
		</base-popup>
	</div>
</template>
<script>
import ClientsSearch from '@/components/ClientsSearch.vue'
import ClientsContent from '@/components/ClientsContent.vue'
import BaseButton from '@/components/BaseButton.vue'
import BasePopup from '@/components/BasePopup'
import BaseInput from '@/components/BaseInput'
export default {
	components: {
		BaseButton,
		ClientsSearch,
		ClientsContent,
		BasePopup,
		BaseInput,
	},
	data() {
		return {
			name: '',
			surname: '',
			description: '',
			phoneNr: '',
			isAddClient: false,
			isEditState: false,
		}
	},
	methods: {
		addClient() {
			console.log('todo')
			this.isAddClient = false
		},
		cancel() {
			this.name = ''
			this.surname = ''
			this.description = ''
			this.phoneNr = ''
			this.isAddClient = false
		},
	},
}
</script>,
<style scoped lang="scss">
.label {
	display: flex;
	font-size: 24px;
}
.search-box {
	@include device-small {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	@include device-medium {
		display: flex;
		justify-content: right;
		margin-top: 10px;
	}
}
.client-header {
	display: flex;
	justify-content: right;
	align-items: center;
	margin-top: 20px;
	&--right {
		justify-content: right;
		@include device-small {
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
	@include device-small {
		justify-content: center;
	}
}
.clients-button {
	margin-top: 16px;
	margin-bottom: 32px;
	justify-content: space-between;
	@include device-small {
		&--mobile-margin-top {
			margin-top: 20px;
		}
	}
}
.popup__buttons {
	justify-content: space-between;
	margin-top: 16px;
}
</style>