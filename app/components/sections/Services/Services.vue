<template>
	<section class="services">
		<UiTitle tag="h2" variant="secondary" class="services__title">
			{{ servicesData.title }}
		</UiTitle>

		<ul class="services__list">
			<li v-for="(item, index) in servicesData.items" :key="item.id" class="services__item"
				:class="{ 'services__item--featured': item.featured }">
				<ServiceCard :item="item" :index="index" />
			</li>
		</ul>

		<UiButton :to="servicesData.moreLink.to" :text="servicesData.moreLink.text" variant="large-dark"
			class="services__more">
			<template #right>
				<UiButtonArrow class="services__more-icon" variant="small" />
			</template>
		</UiButton>
	</section>
</template>

<script setup lang="ts">
	import { SERVICES_SECTION_DATA as servicesData } from './constants'
</script>

<style scoped lang="scss">
	@use './services.scss';
</style>