<template>
	<div
		class="review-image-mask"
		:class="{ 'review-image-mask--parallax': parallax }"
	>
		<div class="review-image-mask__shape">
			<div class="review-image-mask__media">
				<div class="review-image-mask__parallax">
					<NuxtImg
						:src="image.src"
						:alt="image.alt"
						class="review-image-mask__img"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import type { ReviewImageMaskProps } from './types'

	defineProps<ReviewImageMaskProps>()
</script>

<style scoped lang="scss">
	@use './review-image-mask.scss';
</style>