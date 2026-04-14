<template>
	<article class="service-card" :class="{ 'service-card--featured': item.featured }">
		<div class="service-card__main">
			<div class="service-card__top">
				<UiCaption tag="b" variant="number" class="service-card__number">
					{{ displayIndex }}
				</UiCaption>

				<UiTitle tag="h3" variant="subtitle" class="service-card__title">
					{{ item.title }}
				</UiTitle>
			</div>

			<div class="service-card__info">
				<UiCaption tag="span" variant="description-sm" class="service-card__price">
					<UiIcon v-if="item.featured" name="pig" class="service-card__price-icon" />
					{{ item.priceText }}
				</UiCaption>

				<UiCaption tag="p" variant="description-sm" v-if="item.description"
					class="service-card__description">
					{{ item.description }}
				</UiCaption>
				<UiButton v-if="item.buttonText" :to="item.to" :text="item.buttonText" variant="primary"
					class="service-card__button">
					<template #right>
						<UiIcon name="arrow-right" class="service-card__button-icon" />
					</template>
				</UiButton>
			</div>
		</div>

		<div v-if="item.features?.length" class="service-card__aside">
			<ul class="service-card__features">
				<li v-for="feature in item.features" :key="feature" class="service-card__feature">
					<UiCaption tag="p" variant="description" class="service-card__feature-text">
						{{ feature }}
					</UiCaption>
				</li>
			</ul>
		</div>
	</article>
</template>

<script setup lang="ts">
	import { computed } from 'vue'
	import type { ServiceItem } from './types'

	interface Props {
		item: ServiceItem
		index: number
	}

	const props = defineProps<Props>()

	const displayIndex = computed(() => String(props.index + 1).padStart(2, '0'))
</script>

<style scoped lang="scss">
	@use './service-card.scss';
</style>