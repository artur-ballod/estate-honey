<template>
	<section class="awards" aria-labelledby="awards-title">
		<Swiper class="awards__slider" :slides-per-view="1" :breakpoints="sliderBreakpoints" :loop="true" @swiper="handleSwiper">
			<SwiperSlide v-for="slide in AWARDS_SLIDES" :key="slide.id" class="awards__slide" v-slot="{ isNext }">
				<AwardsSlide :slide="slide" :class="isNext ? 'is-next' : ''" />
			</SwiperSlide>
		</Swiper>

		<div class="awards__controls">
			<UiButton icon-only class="awards__control awards__control--next" type="button" aria-label="Следующая награда" @click="slideNext">
				<template #right>
					<UiButtonArrow class="awards__control-icon" />
				</template>
			</UiButton>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import type { Swiper as SwiperInstance } from 'swiper'
	import { Swiper, SwiperSlide } from 'swiper/vue'
	import 'swiper/css';

	import AwardsSlide from './AwardsSlide.vue'
	import { AWARDS_SLIDES } from './constants'

	const swiperInstance = ref<SwiperInstance | null>(null)
	const sliderBreakpoints = {
		360: {
			slidesPerView: 1.028571428,
			spaceBetween: 0,
		},

		1440: {
			slidesPerView: 'auto' as const,
			spaceBetween: 0,
		}
	} as const

	const updateSliderState = () => {
		if (!swiperInstance.value) {
			return
		}
	}

	const handleSwiper = (swiper: SwiperInstance) => {
		swiperInstance.value = swiper
		updateSliderState()

		swiper.on('slideChange', updateSliderState)
		swiper.on('reachBeginning', updateSliderState)
		swiper.on('reachEnd', updateSliderState)
		swiper.on('fromEdge', updateSliderState)
	}

	const slideNext = () => {
		swiperInstance.value?.slideNext()
	}
</script>

<style scoped lang="scss">
	@use './awards.scss';
</style>