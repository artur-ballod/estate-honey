<template>
	<article class="catalog-card">
		<NuxtPicture :src="item.image" :alt="item.imageAlt" width="446" height="" loading="lazy" class="catalog-card__image" />
		<div class="catalog-card__body">
			<div class="catalog-card__main" :data-location="item.locationTagColor">
				<UiTitle tag="h3" variant="subtitle" class="catalog-card__title">
					{{ item.title }}
				</UiTitle>

				<UiCaption variant="description-sm" class="catalog-card__location">
					{{ item.location }}
				</UiCaption>
			</div>

			<div class="catalog-card__meta">
				<UiCaption variant="description-sm" class="catalog-card__meta-text">
					{{ item.flatsLabel }}
				</UiCaption>
				<UiCaption variant="description-sm" class="catalog-card__meta-text">
					{{ item.priceLabel }}
				</UiCaption>
			</div>
			<NuxtLink :to="item.to" class="catalog-card__action" :aria-label="item.detailsLabel" >
				<UiButtonArrow position="rotated" />
			</NuxtLink>
		</div>
	</article>
</template>

<script setup lang="ts">
	import type { CatalogCardItem } from './types'

	interface Props {
		item: CatalogCardItem
	}

	defineProps<Props>()
</script>

<style scoped lang="scss">
	@use './catalog-card.scss';
</style>