<template>
	<div class="container main-page">
		<div class="row statics">
			<div class="col-12 col-lg-6 statics__first">
				<statistic-box title="Główne informacje">
					<div class="col-12 col-md-12 stat-box__info">
						<i class="fas fa-users stat-box__info-icon"></i>
						<p>Dzisiaj jest 6 klientów.</p>
					</div>
					<div class="col-12 col-md-12 stat-box__info">
						<i class="far fa-clock stat-box__info-icon"></i>
						<p>Najbliższe spotkanie jest o 14:00</p>
					</div>
					<div class="col-12 col-md-12 stat-box__info">
						<i class="fas fa-plus stat-box__info-icon"></i>
						<p>W ostatnim tygodniu przybyło 8 nowych klientów!</p>
					</div>
					<div class="col-12 col-md-12 stat-box__info">
						<i class="fas fa-check stat-box__info-icon"></i>
						<p>Jakieś przykładowe dane o klientach</p>
					</div>
				</statistic-box>
			</div>
			<div class="col-12 col-lg-6 statics__second">
				<statistic-box title="Ostatnie finanse">
					<div class="col-12 col-md-12">
						<div class="stat-box__money-border">
							<div class="stat-box__money--negative">
								<div class="row stat-box__money-row">
									<div
										class="col-lg-3 col-12 stat-box__money-value"
									>
										- 20 zł
									</div>
									<div
										class="col-lg-9 col-12 stat-box__money-description"
									>
										zakup kosmetyków
									</div>
								</div>
							</div>
							<div class="stat-box__money--positive">
								<div class="row stat-box__money-row">
									<div
										class="col-lg-3 col-12 stat-box__money-value"
									>
										+ 10 zł
									</div>
									<div
										class="col-lg-9 col-12 stat-box__money-description"
									>
										strzyżenie męskie
									</div>
								</div>
							</div>
							<div class="stat-box__money--negative">
								<div class="row stat-box__money-row">
									<div
										class="col-lg-3 col-12 stat-box__money-value"
									>
										- 200 zł
									</div>
									<div
										class="col-lg-9 col-12 stat-box__money-description"
									>
										Zakup nowej suszarki
									</div>
								</div>
							</div>
							<div class="stat-box__money--positive">
								<div class="row stat-box__money-row">
									<div
										class="col-lg-3 col-12 stat-box__money-value"
									>
										+ 30 zł
									</div>
									<div
										class="col-lg-9 col-12 stat-box__money-description"
									>
										Paznkocie
									</div>
								</div>
							</div>
						</div>
					</div>
				</statistic-box>
			</div>
			<div class="col-12 statics__third">
				<statistic-box title="Podsumowanie miesiąca">
					<div class="col-12 col-md-6 stat-box__chart-item">
						<doughnut-chart
							:chart-data="chartData"
							:options="chartOptions"
						/>
					</div>
					<div class="col-12 col-md-6 stat-box__chart-item">
						<doughnut-chart
							:chart-data="chartData"
							:options="chartOptions"
						/>
					</div>
					<!-- <div class="col-12 col-md-6 stat-box__chart-item">
						<canvas id="myChart" width="200" height="200"></canvas>

					</div>
					<div class="col-12 col-md-6">
						<canvas id="myChart2" width="200" height="200"></canvas>
					</div> -->
				</statistic-box>
			</div>
		</div>
	</div>
</template>

<script>
import StatisticBox from '@/components/StatisticBox'
import DoughnutChart from '@/components/DoughnutChart'
export default {
	components: {
		StatisticBox,
		DoughnutChart,
	},
	data() {
		return {
			labels: ['test', 'test2', 'test3', 'test4'],
			backgroundColors: ['#ff1744', '#ff1744', '#ff1744', '#ff1744'],
			dataChart: [45, 20, 120, 4],
			chartData: {
				labels: ['test', 'test2', 'test3', 'test4'],
				datasets: [
					{
						data: [45, 20, 120, 4],
						backgroundColor: [
							'#ff1744',
							'#ff1744',
							'#ff1744',
							'#ff1744',
						],
						borderWidth: 4,
						borderColor: '#1f1f1f',
						hoverBorderColor: '#37474f',
					},
				],
			},
			chartOptions: {
				legend: {
					display: false,
				},
				cutoutPercentage: 60,
				responsive: true,
				maintainAspectRatio: false,
			},
		}
	},
}
</script>

<style scoped lang="scss">
.main-page {
	height: calc(100% - 70px);
	@include device-large {
		height: unset;
	}
}
.stat-box__title {
	font-size: 24px;
	margin-bottom: 25px;
	padding-bottom: 12px;
	border-bottom: 1px solid #3d4346;
}

// Info.
.stat-box__info {
	display: flex;
	margin-top: 16px;
	font-family: 'mukta-light';
	font-size: 18px;
	&-icon {
		min-width: 30px;
		margin-right: 4px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
.stat-box__money {
	font-family: 'mukta-light';
	border-radius: 12px;
	margin-top: 10px;
	padding: 7px;
	&-row {
		padding: 0 15px;
		color: $white;
	}
	&-value {
		font-size: 16px;
		text-align: center;
		border-bottom: 1px solid rgba(0, 0, 0, 0.275);
		padding-bottom: 8px;
		margin-bottom: 8px;
		padding-top: 8px;
		@include device-large {
			text-align: center;
			padding: 0;
			margin: 0;
			border: none;
		}
	}
	&-border {
		padding: 6px 8px 16px 8px;
		margin-top: 12px;
	}
	&--negative {
		@extend .stat-box__money;
		background-color: #e62e53;
		&:hover {
			background-color: lighten($color: #e62e53, $amount: 5);
		}
	}
	&--positive {
		@extend .stat-box__money;
		background-color: #50ae55;
		&:hover {
			background-color: lighten($color: #50ae55, $amount: 5);
		}
	}
}
// Chart.
.stat-box__chart {
	flex-direction: column;
	&-item {
		margin-bottom: 16px;
		padding-bottom: 16px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.507);
		position: relative;
		max-height: 400px;
	}
}

.statics {
	// margin-top: 32px;
	position: relative;
	height: 100%;
	z-index: 1;
	transition: all 0.6s;
	flex-wrap: nowrap;
	overflow: auto;
	scroll-snap-type: x mandatory;
	@include device-large {
		flex-wrap: wrap;
		overflow: visible;
	}
	&--disabled {
		opacity: 0.5;
	}
	&__first {
		display: flex;
		flex-direction: column;
		scroll-snap-align: start;
	}
	&__second {
		display: flex;
		flex-direction: column;
		scroll-snap-align: start;
		@include device-large {
			margin-top: 24px;
		}
	}
	&__third {
		display: flex;
		flex-direction: column;
		scroll-snap-align: start;
		display: none;
		height: 100%;
		@include device-large {
			margin-top: 24px;
			display: block;
		}
	}
	&--without-margin {
		@extend .statics;
		margin-top: 0;
		padding-bottom: 40px;
	}
}
@include device-medium {
	.statics {
		&--without-margin {
			margin-top: 0;
		}
		&__second {
			margin-top: 0;
		}
		&__third {
			margin-top: 24px;
		}
	}
	@include device-large {
		.statics {
			margin-top: 64px;
		}
	}

	.stat-box__chart {
		flex-direction: row;
		align-items: flex-end;
		justify-content: space-between;
		&-item {
			padding-bottom: 0;
			margin-bottom: 0;
			border: none;
		}
	}
}
</style>