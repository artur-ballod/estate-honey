<template>
	<div>
		<h2>BUTTONS</h2>
		<UiButton
			text="Подробнее"
			icon-name="btn-arrow"
			size="lg"
			theme="large"
		/>

		<UiButton
			text="Контакты"
			theme="dark"
		>
			<template #right>
				<UiButtonArrow />
			</template>
		</UiButton>

		<UiButton
			text="Документация"
			href="https://example.com"
			target="_blank"
		>
			<template #right>
				<UiButtonArrow />
			</template>
		</UiButton>

		<UiButton
			text="Внутренняя страница"
			to="/catalog"
		>
			<template #right>
				<UiButtonArrow />
			</template>
		</UiButton>

		<UiButton
			text="Статьи"
			:count="12"
		/>
	</div>
</template>