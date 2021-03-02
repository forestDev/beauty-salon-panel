<template>
	<div class="row summary">
		<div class="col-lg-4 col-md-6 col-12">
			<div class="summary-item" @click="activeMonth = 1">
				<h3><i class="far fa-calendar-alt" /> Styczeń</h3>
			</div>
		</div>
		<div class="col-lg-4 col-md-6 col-12">
			<div class="summary-item" @click="activeMonth = 2">
				<h3><i class="far fa-calendar-alt" /> Luty</h3>
			</div>
		</div>
		<div class="col-lg-4 col-md-6 col-12">
			<div class="summary-item" @click="activeMonth = 3">
				<h3><i class="far fa-calendar-alt" /> Marzec</h3>
			</div>
		</div>
		<div class="col-lg-4 col-md-6 col-12">
			<div class="summary-item" @click="activeMonth = 4">
				<h3><i class="far fa-calendar-alt" /> Kwiecień</h3>
			</div>
		</div>
		<div class="col-lg-4 col-md-6 col-12">
			<div class="summary-item" @click="activeMonth = 5">
				<h3><i class="far fa-calendar-alt" /> Maj</h3>
			</div>
		</div>
		<div class="col-lg-4 col-md-6 col-12">
			<div class="summary-item" @click="activeMonth = 6">
				<h3><i class="far fa-calendar-alt" /> Czerwiec</h3>
			</div>
		</div>
		<div class="col-lg-4 col-md-6 col-12">
			<div class="summary-item" @click="activeMonth = 7">
				<h3><i class="far fa-calendar-alt" /> Lipiec</h3>
			</div>
		</div>
		<div class="col-lg-4 col-md-6 col-12">
			<div class="summary-item" @click="activeMonth = 8">
				<h3><i class="far fa-calendar-alt" /> Sierpień</h3>
			</div>
		</div>
		<div class="col-lg-4 col-md-6 col-12">
			<div class="summary-item" @click="activeMonth = 9">
				<h3><i class="far fa-calendar-alt" /> Wrzesień</h3>
			</div>
		</div>
		<div class="col-lg-4 col-md-6 col-12">
			<div class="summary-item" @click="activeMonth = 10">
				<h3><i class="far fa-calendar-alt" /> Październik</h3>
			</div>
		</div>
		<div class="col-lg-4 col-md-6 col-12">
			<div class="summary-item" @click="activeMonth = 11">
				<h3><i class="far fa-calendar-alt" /> Listopad</h3>
			</div>
		</div>
		<div class="col-lg-4 col-md-6 col-12">
			<div class="summary-item" @click="activeMonth = 12">
				<h3><i class="far fa-calendar-alt" /> Grudzień</h3>
			</div>
		</div>
		<base-popup
			v-if="monthDetails"
			with-close
			class="popup"
			@close="closeDetails()"
		>
			<h2 slot="header">
				{{ monthDetails.fullName }} {{ monthDetails.year }}
			</h2>
			<template #content>
				<div class="row">
					<div class="col-lg-6 col-12">
						<div class="summary__popup-box">
							<p class="popup__subtitle">
								Największy przychód to:
							</p>
							<div class="popup__content popup__content--green">
								<p class="popup__content-date">
									{{
										monthDetails.maxProfit.date.format(
											'DD/MM/YYYY HH:mm'
										)
									}}
								</p>
								<p>{{ monthDetails.maxProfit.title }}</p>
								<p>
									+{{
										monthDetails.maxProfit.price.toFixed(2)
									}}
									zł
								</p>
							</div>
						</div>
					</div>
					<div class="col-lg-6 col-12">
						<div class="summary__popup-box">
							<p class="popup__subtitle">Twój najlepszy dzień:</p>
							<div class="popup__content">
								<p class="popup__content-date">
									{{
										monthDetails.greatestDay.date.format(
											'DD/MM/YYYY HH:mm'
										)
									}}
								</p>
								<p>{{ monthDetails.greatestDay.day }}</p>
								<p>
									+{{
										monthDetails.greatestDay.price.toFixed(
											2
										)
									}}
									zł
								</p>
							</div>
						</div>
					</div>
					<div class="col-lg-6 col-12">
						<div class="summary__popup-box">
							<p class="popup__subtitle">
								Największy wydatek to:
							</p>
							<div class="popup__content popup__content--red">
								<p class="popup__content-date">
									{{
										monthDetails.maxExpense.date.format(
											'DD/MM/YYYY HH:mm'
										)
									}}
								</p>
								<p>{{ monthDetails.maxExpense.title }}</p>
								<p>
									-{{
										monthDetails.maxExpense.price.toFixed(2)
									}}
									zł
								</p>
							</div>
						</div>
					</div>
					<div class="col-lg-6 col-12">
						<div class="summary__popup-box">
							<p class="popup__subtitle">Wydałeś najwięcej:</p>
							<div class="popup__content">
								<p class="popup__content-date">
									{{
										monthDetails.worstDay.date.format(
											'DD/MM/YYYY HH:mm'
										)
									}}
								</p>
								<p>{{ monthDetails.worstDay.day }}</p>
								<p>
									+{{
										monthDetails.worstDay.price.toFixed(2)
									}}
									zł
								</p>
							</div>
						</div>
					</div>
					<div class="col-12 popup__action">
						<span class="popup__action-hint"
							>Lista wszystkich finansów</span
						>
						<base-button class="popup__action-btn"
							>Generuj PDF</base-button
						>
					</div>
				</div>
			</template>
		</base-popup>
	</div>
</template>

<script>
import moment from 'moment'
import BasePopup from '@/components/BasePopup'
import BaseButton from '@/components/BaseButton'
export default {
	components: {
		BasePopup,
		BaseButton,
	},
	data() {
		return {
			activeMonth: null,
			monthDetails: null,
			payload: [
				{
					numberOfMonth: 1,
					fullName: 'Styczeń',
					year: 2020,
					maxProfit: {
						date: moment(),

						price: 50.4,
						title: 'Hybryda',
						id: 1,
					},
					maxExpense: {
						date: moment(),

						price: 250,
						title: 'Nowa frezarka',
						id: 2,
					},
					greatestDay: {
						date: moment(),
						day: 'Sobota',
						price: 560,
					},
					worstDay: {
						date: moment(),
						day: 'Sobota',
						price: 1250.5,
					},
				},
			],
		}
	},
	methods: {
		getMonth(numberOfMonth) {
			return this.payload.find(
				(item) => item.numberOfMonth === numberOfMonth
			)
		},
		closeDetails() {
			this.activeMonth = null
			this.monthDetails = null
		},
	},
	watch: {
		activeMonth() {
			if (this.activeMonth) {
				this.monthDetails = this.getMonth(this.activeMonth)
			} else {
				this.monthDetails = null
			}
		},
	},
}
</script>

<style scoped lang="scss">
.summary {
	margin-top: 24px;
	margin-left: -16px;
	margin-right: -16px;
	padding-bottom: 40px;
	@include device-medium {
		margin-top: 48px;
	}
	&-item {
		padding: 0 12px;
		border: 1px solid grey;
		border-radius: 0px;
		//box-shadow: 5px 5px 15px 5px #ffffff26;
		margin-top: 24px;
		cursor: pointer;
		user-select: none;
		&:hover {
			background-color: lighten($color: $black, $amount: 10%);
		}
	}
	&__popup-box {
		padding: 16px;
	}
}
.popup__subtitle {
	border-bottom: 1px solid #515151;
	padding-bottom: 4px;
	margin-bottom: 16px;
	color: #515151;
	text-align: center;
}
.popup__action {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	@include device-large {
		justify-content: flex-end;
		padding-right: 31px;
		flex-direction: row;
	}
	&-hint {
		margin-bottom: 15px;
		@include device-large {
			margin-right: 15px;
			margin-bottom: 0px;
		}
	}
	&-btn {
		min-width: 200px;
	}
}
.popup__content {
	text-align: center;
	border-radius: 8px;
	margin-top: 8px;
	background: #111111;
	padding: 16px;
	border: 2px solid $white;
	p {
		margin-top: 6px;
	}
	&-date {
		white-space: nowrap;
	}
	&--green {
		border: 2px solid $green;
		color: $green;
	}
	&--red {
		border: 2px solid $red;
		color: $red;
	}
}
::v-deep .popup-content {
	width: 80vw;
	max-width: unset;
	max-height: 60vh;
	overflow: auto;
}
</style>