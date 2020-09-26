<template>
	<div class="row finance-item">
		<div class="col-3 finance-item__prize">
			<i class="fas fa-pencil-alt finance-edit"></i>
			<p>{{ prize }}zł</p>
		</div>
		<div class="col-6 finance-item__description">
			{{ title }}
		</div>
		<div class="col-3 finance-item__date">
			{{ date.format('DD/MM/YYYY') }}
		</div>
	</div>
</template>

<script>
import moment from 'moment'
export default {
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
		justify-content: center;
		font-weight: bold;
		font-size: 20px;
	}
	&__description {
		align-items: center;
		display: flex;
		text-align: left;
		@include device-large {
			justify-content: center;
		}
	}
	&__date {
		align-items: center;
		display: flex;
		justify-content: center;
	}
}
</style>