<template>
	<article class="review-card">
		<div class="review-card__head">
			<NuxtImg :src="author.avatar" :alt="author.avatarAlt || author.name" class="review-card__avatar" />
			<UiCaption tag="span" variant="description-sm" class="review-card__name">
				{{ author.name }}
			</UiCaption>
			<UiRating class="review-card__rating" :rating="rating" />
		</div>

		<div class="review-card__body">
			<UiTitle tag="h3" variant="accent" class="review-card__title">
				{{ title }}
			</UiTitle>
			<UiCaption tag="p" variant="description-sm" class="review-card__text">
				{{ text }}
			</UiCaption>
		</div>

		<NuxtLink v-if="to" :to="to" class="review-card__link">
			<UiCaption tag="b" variant="micro" class="review-card__link-text">
				{{ linkText }}
			</UiCaption>
			<UiIcon name="arrow-right" class="review-card__link-icon" />
		</NuxtLink>
	</article>
</template>

<script setup lang="ts">
	import type { ReviewCardProps } from './types'

	defineProps<ReviewCardProps>()
</script>

<style scoped lang="scss">
	@use './review-card.scss';
</style>