<template>
	<div class="ui-rating">
		<ul class="ui-rating__stars">
			<li class="ui-rating__item" v-for="(star, index) in ratingStars" :key="`${star}-${index}`">
				<UiIcon :name="getStarIconName(star)" class="ui-rating__icon" />
			</li>
		</ul>

		<UiCaption v-if="showValue" tag="span" variant="description-sm" class="ui-rating__value">
			{{ formattedRating }}
		</UiCaption>
	</div>
</template>

<script setup lang="ts">
	import { computed } from 'vue'
	import type { UiRatingProps, UiRatingStarType } from './types'

	const props = withDefaults(defineProps<UiRatingProps>(), {
		max: 5,
		showValue: true,
	})

	const normalizedRating = computed(() => {
		const safeRating = Math.max(0, Math.min(props.rating, props.max))
		return Math.round(safeRating * 2) / 2
	})

	const formattedRating = computed(() => normalizedRating.value.toFixed(1))

	const ratingStars = computed<UiRatingStarType[]>(() => {
		const stars: UiRatingStarType[] = []

		for (let index = 1; index <= props.max; index += 1) {
			if (normalizedRating.value >= index) {
				stars.push('full')
				continue
			}

			if (normalizedRating.value >= index - 0.5) {
				stars.push('half')
				continue
			}

			stars.push('empty')
		}

		return stars
	})

	const getStarIconName = (star: UiRatingStarType) => {
		const starIconMap = {
			full: 'star-full',
			half: 'star-half',
			empty: 'star-empty',
		} as const

		return starIconMap[star]
	}
</script>

<style scoped lang="scss">
	@use './ui-rating.scss';
</style>