<template>
	<div class="popuptext" id="popup">
		<div class="popuptext__title">Edycja</div>
		<label for="name">Cena</label>
		<input
			class="o-col--6 input-field input-field--shadow"
			name="cena"
			type="text"
		/>
		<label for="name">Nazwa zabiegu</label>

		<select
			class="mat15 input-field input-field--shadow input-field--select o-col--6"
			name="actions"
			id="action"
		>
			<option disabled selected value="">Wybierz</option>
			<option value="volvo">Henna</option>
			<option value="saab">Regulacja</option>
			<option value="mercedes">Manicure hybrydowy</option>
			<option value="audi">Korekta</option>
			<option value="audi">Przedłużanie</option>
			<option value="audi">Pedicure klasyczny</option>
			<option value="audi">Pedicure kwasami</option>
			<option value="audi">Pedicure z hybryda</option>
			<option value="audi">Dermapen</option>
			<option value="audi">Mezoterapia igłowa</option>
			<option value="audi">Oxybrazja</option>
			<option value="audi">Peeling kawitacyjny z maską</option>
			<option value="audi">Makijaż permanentny</option>
			<option value="audi">Powiększanie ust</option>
			<option value="audi">Kwasy</option>
			<option value="audi">Retix C</option>
			<option value="audi">Dermomasaż</option>
		</select>
		<label for="date">Data</label>
		<input
			class="datepicker o-col--6 input-field input-field--shadow"
			name="date"
			type="date"
		/>
		<label for="time">Godzina</label>
		<input
			type="text"
			placeholder="hh:mm:ss"
			class="o-col--6 input-field input-field--shadow"
		/>
		<div class="popuptext__btns">
			<div class="btn btn--save o-col--3" onclick="onClose()">Anuluj</div>
			<div class="btn btn--save o-col--3" onclick="onSave()">Zapisz</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style>
</style>