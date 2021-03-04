<template>
	<div class="container login">
		<div class="row">
			<div class="col-12"></div>
			<div class="col-12 col-md-12">
				<div class="login-form row">
					<div class="col-12 col-md-6 login-form__image">
						<div class="header__logo">
							<img
								class="header__logo-img login-img"
								src="@/assets/images/beautySalonLogo.svg"
							/>
						</div>
						<!--
					<img
							src="@/assets/images/M_logo_trendy_kosmetyka.png"
							alt="logo"
							class="login-form__image-img"
						/>
					-->
					</div>
					<div class="login-form__inputs col-12 col-md-6">
						<div class="row login-form__inputs-login">
							<div class="col-12">
								<!-- INPUT LOGIN -->
								<base-input
									placeholder="Nazwa użytkownika	"
									v-model="username"
								/>
							</div>
						</div>

						<div class="row login-form__inputs-password">
							<!-- INPUT PASSWORD -->
							<div class="col-12">
								<base-input
									v-model="password"
									placeholder="Hasło"
									inputType="password"
								/>
							</div>
							<!-- INPUT PASSWORD -->
						</div>
					</div>
					<div class="col-12 col-md-6">
						<base-button
							class="login-form__button"
							isSignIn
							@click="loginUser"
						>
							Zaloguj się
						</base-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
import { LOGIN_USER, LOGOUT_USER } from '../store/actions.type'
import BaseButton from '@/components/BaseButton'
import BaseInput from '@/components/BaseInput'
export default {
	components: {
		BaseButton,
		BaseInput,
	},
	data() {
		return {
			username: '',
			password: '',
			errors: null,
		}
	},
	methods: {
		...mapActions([LOGIN_USER, LOGOUT_USER]),

		async loginUser() {
			const errors = await this.LOGIN_USER({
				username: this.username,
				password: this.password,
			})
			if (errors) {
				this.errors = errors
				return
			}
			this.$router.push({ name: 'mainPage' })
		},
	},
}
</script>

<style lang="scss">
.login-section {
	margin: $gutter;
}

.login {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	&-form {
		text-align: center;
		background: #1f1f1f;
		&__image {
			display: flex;
			object-fit: cover;
			&-img {
				width: 100%;
				height: auto;
			}
		}
		&__button {
			margin: 0px 20px 20px 20px;
		}
		&__inputs {
			display: flex;
			flex-wrap: wrap;
			flex-direction: column;
			padding-bottom: $grid-base * 2;
			padding-top: $grid-base * 2;
			margin-top: 25px;
			margin-bottom: 25px;

			&-login {
				margin: 0 15px;
			}
			&-password {
				padding-top: $grid-base * 2;
				margin: 0 15px;
			}
		}
	}
}
@include device-small {
	.login-section {
		padding: 0;
	}
}

@include device-medium {
	.login-form {
		margin: 0 auto;
		flex-direction: column;
		align-content: center;
	}
}
.login-img {
	width: 100%;
	margin-top: 20px;
	@include device-small {
		width: 90%;
	}
}
</style>
