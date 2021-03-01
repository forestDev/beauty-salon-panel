<template>
	<div class="col-12">
		<div class="row clients">
			<client-item
				v-for="i in 10"
				:key="i"
				:client="client"
				@edit="onEdit"
				:isEditState="isEditState"
			/>
			<base-popup with-close v-if="editingClient" @destroy="onDestroyPopup" @close="onCloseEdit">
				<h4 slot="header">Edycja klienta</h4>
				<template slot="content">
					<base-input shadow v-model="editingClient.name" />
					<base-input shadow v-model="editingClient.surname" />
					<base-input shadow v-model="editingClient.phone" />
					<base-input shadow  v-model="editingClient.description" />
					<div class="row popup__actions">
						<div class="col-lg-5 col-12">
							<base-button @click="onCancel">Anuluj</base-button>
						</div>
						<div class="col-lg-5 col-12">
							<base-button @click="onSave">Zapisz</base-button>
						</div>
						
					</div>
				</template>
			</base-popup>
		</div>
	</div>
</template>

<script>
import ClientItem from '@/components/ClientItem'
import BasePopup from '@/components/BasePopup'
import BaseInput from '@/components/BaseInput'
import BaseButton from '@/components/BaseButton'
export default {
	components: {
		ClientItem,
		BaseInput,
		BasePopup,
		BaseButton
	},
	props: {
		isEditState: {
			type: Boolean,
			required: false,
		},
	},
	data() {
		return {
			client: {
				name: 'Jan',
				surname: 'Kowalski',
				phone: '123321123',
				description:
					'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipiLorem ipsum dolor sit amet consectetur adipiLorem ipsum dolor sit amet consectetur adipiLorem ipsum dolor sit amet consectetur adipiLorem ipsum dolor sit amet consectetur adipiLorem ipsum dolor sit amet consectetur adipiLorem ipsum dolor sit amet consectetur adipiLorem ipsum dolor sit amet consectetur adipiLorem ipsum dolor sit amet consectetur adipiLorem ipsum dolor sit amet consectetur adipi consectetur adipisicing elit.Odio fugit eaque consectetur explicabo voluptates magni! Et aspernatur praesentium facere velit non unde quidem autem fugit perspiciatis, dolorem doloribus culpa debitis quam,',
			},
			editingClient: null,
		}
	},
	methods: {
		onEdit(id) {
			// @todo find client by id.
			this.editingClient = {...this.client};
		},
		onDestroyPopup() {
			this.editingClient = null;
			this.$emit('update:isEditState', false)
		},
		onCloseEdit() {
			this.editingClient = null,
			this.$emit('update:isEditState', false)
				},
		onCancel() {
			this.editingClient = null,
			this.$emit('update:isEditState', false)
		},
		onSave() {
			this.editingClient = null;
			this.$emit('update:isEditState', false)
		},	
}
}
</script>

<style scoped lang="scss">
.clients {
	display: flex;
	background-color: #1f1f1f;
	border: 2px solid $black;
	border-radius: 5px;
	height: 600px;
	overflow-y: auto;
	font-family: 'mukta-light';
	scrollbar-width: thin;
	justify-content: space-around;
	margin-top: 20px;
}
.popup__actions {
	justify-content: space-between ;
margin-top: 16px;
	}
</style>