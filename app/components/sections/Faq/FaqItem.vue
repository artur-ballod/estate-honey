<template>
	<details class="faq-item">
		<summary class="faq-item__summary">
			<UiCaption tag="b" variant="counter" class="faq-item__number">
				{{ formattedNumber }}
			</UiCaption>

			<UiCaption tag="span" variant="accent" class="faq-item__question">
				{{ question }}
			</UiCaption>

			<UiIcon
				v-if="isMobile"
				name="arrow-down"
				class="faq-item__arrow"
			/>

			<span v-if="!isMobile" class="faq-item__arrow faq-item__arrow--desktop">
				<UiIcon v-if="!isMobile" name="shape-bg" class="faq-item__arrow-bg" />
				<UiIcon name="arrow-down" class="faq-item__arrow-icon" />
			</span>
		</summary>

		<div class="faq-item__content">
			<UiCaption tag="p" variant="description-sm" class="faq-item__answer">
				{{ answer }}
			</UiCaption>
		</div>
	</details>
</template>

<script setup lang="ts">
	import { computed } from 'vue'
	import { useMediaQuery } from '@vueuse/core'

	interface Props {
		number: number
		question: string
		answer: string
	}

	const props = defineProps<Props>()

	const isMobile = useMediaQuery('(max-width: 1439px)')

	const formattedNumber = computed(() => String(props.number).padStart(2, '0'))
</script>

<style scoped lang="scss">
	@use './faq-item.scss';
</style>