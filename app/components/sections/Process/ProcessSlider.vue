<template>
	<div class="process-slider">
		<div class="process-slider__bg">
			<UiIcon name="slider-shape" class="process-slider__bg-shape"/>
		</div>

		<UiButton
			class="process-slider__arrow"
			aria-label="Следующий шаг"
			size="free"
			theme="transparent"
			@click="slideNext"
		>
			<template #right>
				<UiIcon name="slider-arr-right" class="process-slider__arrow-icon" />
			</template>
		</UiButton>

		<Swiper :slides-per-view="1" :space-between="0" :speed="700" :modules="swiperModules" effect="fade" :fade-effect="{ crossFade: true } "class="process-slider__swiper"
			@swiper="handleSwiper" @slideChange="handleSlideChange">
			<SwiperSlide v-for="slide in slides" :key="slide.id" class="process-slider__slide">
				<div class="process-slider__top">
					<UiIcon :name=slide.stepIcon class="process-slider__step" />
				</div>

				<div class="process-slider__data">
					<UiTitle tag="h3" variant="subtitle" class="process-slider__data-title">
						{{ slide.title }}
					</UiTitle>

					<ul class="process-slider__data-list">
						<li v-for="(item, index) in slide.description" :key="`${slide.id}-${index}`"
							class="process-slider__data-item">
							<UiCaption tag="p" variant="accent" class="process-slider__data-text">
								{{ item }}
							</UiCaption>
						</li>
					</ul>

					<UiButton :to="slide.buttonTo" :text="slide.buttonText" variant="simple-light"
						class="process-slider__button" />
				</div>
			</SwiperSlide>
		</Swiper>

		<div class="process-slider__controls">
			<!-- <UiButton icon-only type="button" class="process-slider__controls-nav process-slider__controls-nav--prev"
				aria-label="Предыдущий шаг" @click="slidePrev">
				<template #right>
					<UiButtonArrow variant="small" class="process-slider__controls-icon" />
				</template>
			</UiButton> -->

			<ul class="process-slider__pagination">
				<li v-for="(slide, index) in slides" :key="slide.id" class="process-slider__pagination-item">
					<button type="button" class="process-slider__pagination-button"
						:class="{ 'is-active': index === activeIndex }" @click="slideTo(index)">
						<UiCaption tag="span" variant="micro" class="process-slider__pagination-step">
							Шаг {{ slide.step }}
						</UiCaption>
					</button>
				</li>
			</ul>

			<UiButton icon-only type="button" class="process-slider__controls-nav process-slider__controls-nav--next"
				aria-label="Следующий шаг" @click="slideNext">
				<template #right>
					<UiButtonArrow variant="small" class="process-slider__controls-icon" />
				</template>
			</UiButton>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, watch } from 'vue'
	import { Swiper, SwiperSlide } from 'swiper/vue'
	import { EffectFade } from 'swiper/modules'
	import type { Swiper as SwiperType } from 'swiper'
	import 'swiper/css/effect-fade'
	import type { ProcessSlide } from './types'

	interface Props {
		tabId: string
		slides: ProcessSlide[]
	}

	const swiperModules = [EffectFade]

	const props = defineProps<Props>()

	const swiperInstance = ref<SwiperType | null>(null)
	const activeIndex = ref(0)

	const handleSwiper = (swiper: SwiperType) => {
		swiperInstance.value = swiper
	}

	const handleSlideChange = (swiper: SwiperType) => {
		activeIndex.value = swiper.realIndex
	}

	const slideTo = (index: number) => {
		swiperInstance.value?.slideTo(index)
	}

	const slidePrev = () => {
		swiperInstance.value?.slidePrev()
	}

	const slideNext = () => {
		swiperInstance.value?.slideNext()
	}

	watch(
		() => props.tabId,
		() => {
			activeIndex.value = 0
			swiperInstance.value?.slideTo(0, 0)
		}
	)
</script>

<style scoped lang="scss">
	@use './process-slider.scss';
</style>