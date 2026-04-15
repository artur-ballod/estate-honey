<template>
	<article class="review-source-card" :data-type="props.dataType">
		<div class="review-source-card__head">
			<span class="review-source-card__logo" />
			<UiRating :rating="rating" class="review-source-card__rating" />
			<UiTitle tag="p" variant="accent" class="review-source-card__count">
				{{ reviewsCountText }}
			</UiTitle>
		</div>

		<NuxtLink v-if="to" :to="to" class="review-source-card__link">
			<UiCaption tag="b" variant="micro" class="review-source-card__link-text">
				{{ linkText }}
			</UiCaption>

			<UiIcon name="arrow-right" class="review-source-card__link-icon" />
		</NuxtLink>
	</article>
</template>

<script setup lang="ts">
	import { computed } from 'vue'
	import type { ReviewSourceCardProps } from './types'

	const props = defineProps<ReviewSourceCardProps>()

	const reviewsCountText = computed(() => `${props.reviewsCount} отзывов`)
</script>

<style scoped lang="scss">
	@use './review-source-card.scss';
</style>