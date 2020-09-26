<template>
	<div class="o-row">
		<!-- Container with finance -->

		<div class="o-col--9 o-col--md-9">
			<p class="c-heading--level2">Twoje wydatki:</p>
		</div>
		<div class="o-col--3 o-col--md-3">
			<div class="edit edit--color">
				<i
					onclick="editFinance()"
					class="edit--transformers fas fa-edit"
				></i>
			</div>
		</div>

		<div class="o-col--12 finance">
			<!-- item -->
			<div class="o-row margin">
				<div
					class="o-col--3 finance__item finance__item--money finance__item--expenses"
				>
					<i
						class="fas fa-pencil-alt finance-edit"
						id="1"
						name="editFinance"
						onclick="onEdit(this)"
					></i>
					<p>-50zł</p>
				</div>
				<div
					class="o-col--6 finance__item finance__item--description finance__item--expenses"
				>
					Kupno nowego stanowiska (stolik, krzesło, urządzenia)
				</div>
				<div
					class="o-col--3 finance__item finance__item--date finance__item--expenses"
				>
					12/12/2020
				</div>
			</div>
			<!-- item -->
			<div class="o-row margin">
				<div
					class="o-col--3 finance__item finance__item--money finance__item--expenses"
				>
					<i
						onclick="onEdit(this)"
						id="2"
						class="fas fa-pencil-alt finance-edit"
						name="editFinance"
					></i>
					<p>-10zł</p>
				</div>
				<div
					class="o-col--6 finance__item finance__item--description finance__item--expenses"
				>
					Opłata za paliwo
				</div>
				<div
					class="o-col--3 finance__item finance__item--date finance__item--expenses"
				>
					12/12/2020
				</div>
			</div>
			<!-- item -->
			<div class="o-row margin">
				<div
					class="o-col--3 finance__item finance__item--money finance__item--expenses"
				>
					<i
						onclick="onEdit(this)"
						id="3"
						class="fas fa-pencil-alt finance-edit"
						name="editFinance"
					></i>
					<p>-2120zł</p>
				</div>
				<div
					class="o-col--6 finance__item finance__item--description finance__item--expenses"
				>
					Zamówienie lampy
				</div>
				<div
					class="o-col--3 finance__item finance__item--date finance__item--expenses"
				>
					12/12/2020
				</div>
			</div>
			<!-- item -->
			<div class="o-row margin">
				<div
					class="o-col--3 finance__item finance__item--money finance__item--expenses"
				>
					<i
						onclick="onEdit(this)"
						id="4"
						class="fas fa-pencil-alt finance-edit"
						name="editFinance"
					></i>
					<p>-320zł</p>
				</div>
				<div
					class="o-col--6 finance__item finance__item--description finance__item--expenses"
				>
					Zakupy w hurtowni
				</div>
				<div
					class="o-col--3 finance__item finance__item--date finance__item--expenses"
				>
					12/12/2020
				</div>
			</div>
			<!-- item -->
			<div class="o-row margin">
				<div
					class="o-col--3 finance__item finance__item--money finance__item--expenses"
				>
					<i
						onclick="onEdit(this)"
						id="5"
						class="fas fa-pencil-alt finance-edit"
						name="editFinance"
					></i>
					<p>-220zł</p>
				</div>
				<div
					class="o-col--6 finance__item finance__item--description finance__item--expenses"
				>
					Zwrot klienta
				</div>
				<div
					class="o-col--3 finance__item finance__item--date finance__item--expenses"
				>
					12/12/2020
				</div>
			</div>
			<!-- item -->
			<div class="o-row margin">
				<div
					class="o-col--3 finance__item finance__item--money finance__item--expenses"
				>
					<i
						onclick="onEdit(this)"
						id="6"
						class="fas fa-pencil-alt finance-edit"
						name="editFinance"
					></i>
					<p>-50zł</p>
				</div>
				<div
					class="o-col--6 finance__item finance__item--description finance__item--expenses"
				>
					Nowa frezarka
				</div>
				<div
					class="o-col--3 finance__item finance__item--date finance__item--expenses"
				>
					12/12/2020
				</div>
			</div>
			<!-- item -->
			<div class="o-row margin">
				<div
					class="o-col--3 finance__item finance__item--money finance__item--expenses"
				>
					<i
						onclick="onEdit(this)"
						id="7"
						class="fas fa-pencil-alt finance-edit"
						name="editFinance"
					></i>
					<p>-82zł</p>
				</div>
				<div
					class="o-col--6 finance__item finance__item--description finance__item--expenses"
				>
					Obiad
				</div>
				<div
					class="o-col--3 finance__item finance__item--date finance__item--expenses"
				>
					12/12/2020
				</div>
			</div>
			<!-- item -->
			<div class="o-row margin">
				<div
					class="o-col--3 finance__item finance__item--money finance__item--expenses"
				>
					<i
						onclick="onEdit(this)"
						id="8"
						class="fas fa-pencil-alt finance-edit"
						name="editFinance"
					></i>
					<p>-120zł</p>
				</div>
				<div
					class="o-col--6 finance__item finance__item--description finance__item--expenses"
				>
					Opłata za prąd
				</div>
				<div
					class="o-col--3 finance__item finance__item--date finance__item--expenses"
				>
					12/12/2020
				</div>
			</div>
			<!-- item -->
			<div class="o-row margin">
				<div
					class="o-col--3 finance__item finance__item--money finance__item--expenses"
				>
					<i
						onclick="onEdit(this)"
						id="9"
						class="fas fa-pencil-alt finance-edit"
						name="editFinance"
					></i>
					<p>-820zł</p>
				</div>
				<div
					class="o-col--6 finance__item finance__item--description finance__item--expenses"
				>
					Obiad
				</div>
				<div
					class="o-col--3 finance__item finance__item--date finance__item--expenses"
				>
					12/12/2020
				</div>
			</div>
			<!-- item -->
			<div class="o-row margin">
				<div
					class="o-col--3 finance__item finance__item--money finance__item--expenses"
				>
					<i
						onclick="onEdit(this)"
						id="10"
						class="fas fa-pencil-alt finance-edit"
						name="editFinance"
					></i>
					<p>-20zł</p>
				</div>
				<div
					class="o-col--6 finance__item finance__item--description finance__item--expenses"
				>
					Zakupy
				</div>
				<div
					class="o-col--3 finance__item finance__item--date finance__item--expenses"
				>
					12/12/2020
				</div>
			</div>
			<!-- item -->
			<div
				class="o-row summary summary__profits summary__profits--expenses"
			>
				<div class="o o-col--6 summary__profits--results">
					Podsumowanie
				</div>
				<div class="o o-col--5 summary__profits--money">
					-10 900 PLN
				</div>
			</div>
		</div>
		<div class="o-col--12 o-col--md-12 add">
			<button class="button-add-expenses">Dodaj</button>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style>
</style>