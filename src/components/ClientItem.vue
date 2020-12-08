<template>
	<div class="col-12 col-md-5 name-box name-box--mt" @click="isEditState ? $emit('edit', client.id) : ''">
		<div
			class="row date-person"
		>
			<div class="col-12">
			<i v-if="isEditState" class="date-person__edit fas fa-edit"></i>

				{{ client.name }} {{ client.surname }}
				</div>
			<div class="col-12">{{ client.phone }}</div>
			
		</div>
		<div class="row">
			<div class="col-12">
				<div class="info-client">
					<p>
						{{ client.description }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		client: {
			type: Object,
			required: true,
		},
		isEditState: {
			type: Boolean,
			default: false
		}
	},
	
}
</script>

<style scoped lang="scss">
.date-person {
	align-items: center;
	text-align: center;
	background: #393939;
	margin-left: -15px;
	margin-right: -15px;
	color: white;
	position: sticky;
	top: 0;
	font-size: 20px;
	padding: 10px 0;
	&__edit {
		position: absolute;
		left: 15px;
	}
}
.name-box {
	display: flex;
	flex-direction: column;
	height: 240px;
	font-family: 'mukta-light';
	margin-top: 10px;
	overflow-y: auto;
	border-radius: 5px;
	box-shadow: 0 0 1.5em $black;
	@include device-small {
		margin-left: 30px;
	}
	&--mt {
		margin-top: 20px;
	}
}
.info-client {
	background: black;
	display: flex;
	justify-content: center;
	text-align: center;
	font-size: 18px;
	height: 100%;
	margin-left: -15px;
	margin-right: -15px;
	padding: 10px;
	overflow-y: auto;
	scrollbar-width: thin;
}
</style>