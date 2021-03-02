<template>
	<div>
		<!-- Content -->
		<div class="container relative trans" id="content-finance">
			<div class="row options">
				<router-link
					to="/finanse"
					active-class="options__button--active"
					class="col-12 col-md-4 options__button"
					>Finanse</router-link
				>
				<router-link
					to="/podsumowanie"
					active-class="options__button--active"
					class="col-12 col-md-4 options__button"
					>Podsumowanie</router-link
				>
			</div>
			<router-view />
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.options {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	margin-top: 24px;

	&__button {
		display: flex;
		align-items: center;
		text-align: center;
		justify-content: center;
		color: $white;

		letter-spacing: 1px;
		text-decoration: none;
		margin-top: 2px;
		font-size: 20px;
		background-color: $black;
		border: 1px solid white;
		height: 40px;
		cursor: pointer;
		text-transform: uppercase;
		background: #1f1f1f;
		font-family: 'mukta-light';
		transition: ease-in-out 0.3s;
		&--active {
		//	background-color: lighten($color: #000000, $amount: 30%);
		// Wyłączyłem, ponieważ za duży kontrast się zrobił. Trzeba pomyśleć jak lepiej wyróżnić aktywną zakładkę
		}
		&:hover {
			background: black;
			border: 1px solid #353e44;
		}
	}
}

.margin {
	padding-top: 10px;
}
.new-position {
	background-color: $white;
	height: 50px;
	width: 100%;
	display: flex;

	&-edit {
		position: absolute;
		left: 15px;
		display: none;
		cursor: pointer;
		&--active {
			display: block;
		}
		@include device-small {
			min-height: 50px;
		}
		&--style {
			border: 1px solid $black;
		}
		&--border-radius {
			@include device-large {
				border-radius: 0 30px 30px 0;
			}
		}
		&--border-radius2 {
			font-size: 30px;
			@include device-large {
				border-radius: 30px 0px 0px 30px;
			}
		}
	}
	.summary {
		background-color: $green;
		height: 41px;
		font-size: 5px;
		text-align: center;
		align-items: center;
		justify-content: left;
		display: flex;
		position: sticky;
		bottom: 0;

		&__profits {
			background-color: #1f4d32d6;
			justify-content: space-between;
			display: flex;
			font-size: 25px;
			margin-top: 10px;
			@include device-small {
				font-size: 20px;
				display: flex;
				align-items: center;
			}
			@media (max-width: 342px) and(min-width:320px) {
				font-size: 17px;
			}
			&--results {
				text-align: left;
			}
			&--money {
				text-align: right;
			}
			&--expenses {
				background: #880909cf;
			}
		}
	}
	.edit {
		background-color: $black;
		border: none;
		display: flex;
		align-items: center;
		height: 100%;
		font-size: 25px;
		justify-content: right;

		&--transformers {
			cursor: pointer;

			transition: ease-in-out 0.2s;
			&:hover {
				transform: scale(1.2);
				color: yellow;
			}
		}
	}
	.add {
		display: flex;
		justify-content: center;
		padding-top: 10px;
	}
	.button-add {
		height: 40px;
		width: 250px;
		letter-spacing: 2px;
		font-size: 18px;
		color: $white;
		border-radius: round($number: 8px);
		border: 1px solid white;
		text-align: center;
		-webkit-transition: box-shadow 300ms ease-in-out,
			color 300ms ease-in-out;
		transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
		background-color: $black;
		cursor: pointer;
		text-transform: uppercase;

		&:hover {
			box-shadow: 0 0 40px #2fd568 inset;
		}
	}
	.button-add-expenses {
		height: 40px;
		width: 250px;
		letter-spacing: 2px;
		font-size: 18px;
		color: $white;
		border-radius: round($number: 8px);
		border: 1px solid white;
		text-align: center;
		-webkit-transition: box-shadow 300ms ease-in-out,
			color 300ms ease-in-out;
		transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
		background-color: $black;
		cursor: pointer;
		text-transform: uppercase;
		&:hover {
			box-shadow: 0 0 40px #f90c0ccf inset;
		}
	}

	// Popup

	.popup {
		position: relative;
	}

	.popuptext {
		opacity: 0;
		display: none;
		background-color: $white;
		color: $black;
		border-radius: 6px;
		padding: 8px 0;
		position: absolute;
		z-index: 1;
		left: 30%;
		top: 100px;
		width: 50%;
		flex-direction: column;
		align-items: center;
		transition: all 0.6s;
		padding: 32px;
		&__btns {
			display: flex;
			justify-content: space-evenly;
			width: 100%;
			margin-top: 32px;
		}
		&__title {
			font-size: 32px;
			border-bottom: 1px solid rgba(0, 0, 0, 0.239);
		}
		& input {
			margin-top: 15px;
		}
		& label {
			margin-top: 15px;
		}
	}

	.show {
		display: flex;
		opacity: 1;
	}

	// Style zakładki Wydatki

	.input-field {
		box-sizing: border-box;
		height: 40px;
		min-height: 40px;
		width: 100%;
		border: 1px solid rgba(128, 128, 128, 0.609);
		border-radius: 4px;
		font-family: 'cinzel';
		&--select {
			/* for Firefox */
			-moz-appearance: none;
			/* for Chrome */
			-webkit-appearance: none;

			/* For IE10 */
		}
		&__option {
			padding: 10px;
		}
	}
	select::-ms-expand {
		display: none;
	}
	.input-field--shadow {
		box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.411);
	}

	.mat15 {
		margin-top: 15px;
	}

	.btn--save {
		margin-top: 15px;
		border: 1px solid rgba(128, 128, 128, 0.609);
		transition: all 0.3s;
		&:hover {
			background-color: darken($color: white, $amount: 10%);
		}
	}
	.disabled {
		opacity: 0.5;
	}
	.trans {
		transition: all 0.2s;
	}
}
</style>