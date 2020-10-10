<template>
	<div class="container login">
		<div class="row">
			<div class="col-12"></div>
			<div class="col-12 col-md-12">
				<div class="login-form row">
					<div class="col-12 col-md-6 login-form__image">
						<img
							src="@/assets/images/M_logo_trendy_kosmetyka.png"
							alt="logo"
							class="login-form__img-img"
						/>
					</div>
					<div class="login-form__inputs col-12 col-md-6">
						<div class="row login-form__inputs-login">
							<div class="col-12">
								<!-- INPUT LOGIN -->
								<base-input
									placeholder="E-mail"
									v-model="email"
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
			email: '',
			password: '',
		}
	},
	methods: {
		...mapActions([LOGIN_USER]),

		loginUser() {
			this.LOGIN_USER({
				email: this.email,
				password: this.password,
			})
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

		&__image {
			display: flex;
			object-fit: cover;
			&-img {
				width: 100%;
				height: auto;
			}
		}
		&__button {
			margin: 0 15px;
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
</style>