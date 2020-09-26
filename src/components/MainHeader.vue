<template>
	<div class="row header">
		<div class="col-2 col-md-1">
			<div class="header__icon" @click="isMenu = !isMenu">
				<i class="fas fa-bars" />
			</div>
		</div>
		<div class="col-6 col-md-8 header__logo">TRENDY</div>
		<div class="header__date col-4 col-md-3" id="timer">
			{{ time }}
		</div>
		<transition name="slide">
			<base-menu v-show="isMenu" @click="isMenu = !isMenu" />
		</transition>
		<transition name="wall">
			<div
				@click="isMenu = !isMenu"
				class="header__wall"
				v-show="isMenu"
			/>
		</transition>
	</div>
</template>

<script>
import moment from 'moment'
import BaseMenu from '@/components/BaseMenu'
export default {
	data() {
		return {
			time: null,
			timeInterval: null,
			isMenu: false,
		}
	},
	components: {
		BaseMenu,
	},
	methods: {
		setTime() {
			this.time = moment().format('DD/MM/YYYY HH:mm')
		},
	},
	created() {
		// Init time.
		this.setTime()
		// Refresh time every 30sec.
		this.timeInterval = setInterval(this.setTime, 30000)
	},
	beforeDestroy() {
		clearInterval(this.timeInterval)
	},
}
</script>

<style scoped lang='scss'>
.header {
	background-color: $black;
	padding-top: 10px;
	height: 70px;
	box-sizing: border-box;
	position: sticky;
	top: 0;
	z-index: 999;
	&__icon {
		display: flex;
		font-size: 32px;
		align-items: center;
		justify-content: center;
		height: 100%;
		cursor: pointer;
	}
	&__logo {
		background-color: black;
		display: flex;
		font-size: 40px;
		color: $white;
		letter-spacing: 9px;
		justify-content: center;
		align-items: center;
		text-align: center;
		user-select: none;
		@include device-small {
			font-size: 25px;
		}
	}
	&__date {
		display: flex;
		background-color: $black;
		font-size: 22px;
		text-align: center;
		align-items: center;
		justify-content: center;
		font-family: 'mukta-light';
		@include device-small {
			font-size: 20px;
		}
	}
	&__wall {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 9;
		background-color: #000000c2;
	}
}
.slide-enter-active {
	transform: translateX(0px);
	transition: transform 0.8s;
}
.slide-leave-active {
	transform: translateX(-500px);
	transition: transform 0.8s;
}
.slide-enter {
	transform: translateX(-500px);
}
.slide-leave {
	transform: translateX(0px);
}
.wall-enter {
	background-color: transparent !important;
}
.wall-enter-active {
	background-color: #000000c2;
	transition: background-color 0.6s;
}
.wall-leave {
	background-color: #000000c2;
}
.wall-leave-active {
	background-color: transparent;
	transition: background-color 0.6s;
}
</style>