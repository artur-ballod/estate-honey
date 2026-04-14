<template>
	<section class="reviews" aria-labelledby="reviews__title">
		<div class="reviews__layout">
			<div class="reviews__header">
				<UiTitle id="reviews__title" tag="h2" variant="secondary" class="reviews__title">
					{{ REVIEWS_SECTION_TITLE }}
				</UiTitle>

				<UiTitle tag="h3" variant="subtitle" class="reviews__lead">
					{{ REVIEWS_SECTION_LEAD }}
				</UiTitle>
			</div>

			<ReviewImageMask :image="REVIEWS_SECTION_IMAGE" class="reviews__image" />

			<div class="reviews__rail">
				<ul class="reviews__column reviews__column--left">
					<li
						v-for="item in leftColumnReviewItems"
						:key="item.id"
						class="reviews__item"
					>
						<ReviewCard
							:author="item.author"
							:rating="item.rating"
							:title="item.title"
							:text="item.text"
							:to="item.to"
							:link-text="item.linkText"
						/>
					</li>

					<li class="reviews__item reviews__item--last">
						<UiButton
							size="lg"
							theme="large"
							:text="REVIEWS_SECTION_MORE_BUTTON.text"
							:to="REVIEWS_SECTION_MORE_BUTTON.to"
							class="reviews__more"
						>
							<template #right>
								<UiButtonArrow class="reviews__more-icon" />
							</template>
						</UiButton>
					</li>
				</ul>

				<ul class="reviews__column reviews__column--right">
					<li
						v-for="item in rightColumnItems"
						:key="item.id"
						class="reviews__item"
					>
						<ReviewCard
							v-if="item.type === 'review'"
							:author="item.author"
							:rating="item.rating"
							:title="item.title"
							:text="item.text"
							:to="item.to"
							:link-text="item.linkText"
						/>

						<ReviewSourceCard
							v-else
							:source-name="item.sourceName"
							:icon="item.icon"
							:rating="item.rating"
							:reviews-count="item.reviewsCount"
							:to="item.to"
							:link-text="item.linkText"
							:data-type="item.icon"
						/>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { useWindowSize } from '@vueuse/core'
	import {
		REVIEWS_SECTION_IMAGE,
		REVIEWS_SECTION_ITEMS,
		REVIEWS_SECTION_LEAD,
		REVIEWS_SECTION_TITLE,
		REVIEWS_SECTION_MORE_BUTTON,
	} from './constants'

	const MOBILE_BREAKPOINT = 1440

	const { width } = useWindowSize()

	const isMobile = computed(() => width.value < MOBILE_BREAKPOINT)

	const reviewItems = computed(() =>
		REVIEWS_SECTION_ITEMS.filter((item) => item.type === 'review'),
	)

	const sourceItems = computed(() =>
		REVIEWS_SECTION_ITEMS.filter((item) => item.type === 'source'),
	)

	const leftColumnReviewItems = computed(() => reviewItems.value.slice(0, 4))
	const rightColumnReviewItems = computed(() => reviewItems.value.slice(4, 7))

	const desktopRightColumnItems = computed(() => [
		...rightColumnReviewItems.value,
		...sourceItems.value,
	])

	const mobileRightColumnItems = computed(() => sourceItems.value)

	const rightColumnItems = computed(() =>
		isMobile.value ? mobileRightColumnItems.value : desktopRightColumnItems.value,
	)
</script>

<style scoped lang="scss">
	@use './reviews.scss';
</style>