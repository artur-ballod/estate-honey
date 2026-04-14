<template>
	<article class="awards-slide">
		<div class="awards-slide__award">
			<UiIcon name="logo-bg" class="awards-slide__award-bg" />
			<NuxtImg 
				:src="slide.awardImage" 
				:alt="slide.awardImageAlt" 
				loading="lazy"
				class="awards-slide__award-image" 
			/>
		</div>

		<div class="awards-slide__content">
			<div class="awards-slide__meta">
				<UiCaption tag="span" variant="description-sm" class="awards-slide__year">
					{{ slide.year }}
				</UiCaption>

				<UiCaption tag="span" variant="description-sm"  class="awards-slide__label">
					{{ slide.label }}
				</UiCaption>
			</div>

			<UiTitle tag="h2" variant="secondary" class="awards-slide__title">
				{{ slide.title }}
			</UiTitle>

			<UiTitle tag="h3" variant="subtitle" v-if="slide.subtitle" class="awards-slide__subtitle">
				{{ slide.subtitle }}
			</UiTitle>

			<UiCaption tag="p" variant="description-sm" class="awards-slide__description">
				{{ slide.description }}
			</UiCaption>
		</div>
	</article>
</template>

<script setup lang="ts">
	import type { AwardSlide } from './types'

	interface Props {
		slide: AwardSlide
	}

	defineProps<Props>()
</script>

<style scoped lang="scss">
	@use './awards-slide.scss';
</style>