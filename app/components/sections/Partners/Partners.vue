<template>
	<div class="partners" aria-labelledby="partners-title">
		<UiTitle
			id="partners-title" 
			tag="b" 
			variant="micro" 
			class="partners__title"
		>
			{{ partnersContent.title }}
		</UiTitle>

		<ul class="partners__list">
			<li
				v-for="partner in partnersContent.items"
				:key="partner.id"
				class="partners__item"
			>
				<NuxtImg
					:src="partner.src"
					:width="partner.width"
					:height="partner.height"
					:alt="partner.alt"
					loading="lazy"
					class="partners__logo"
				/>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
	import { APP_PARTNERS_CONTENT } from './constants'

	const partnersContent = APP_PARTNERS_CONTENT
</script>

<style scoped lang="scss">
	@use './partners.scss';
</style>