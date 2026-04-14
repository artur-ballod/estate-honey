<template>
	<section class="faq">
		<UiTitle v-html="content.title" tag="h2" variant="secondary" class="faq__title" />

		<ol class="faq__list">
			<li v-for="(item, index) in visibleItems" :key="item.id" class="faq__item">
				<FaqItem
					:number="index + 1"
					:question="item.question"
					:answer="item.answer"
					:is-mobile="isMobile"
				/>
			</li>
		</ol>

		<button v-if="hasHiddenItems && !isExpanded" type="button" class="faq__more" @click="showAll">
			<UiCaption tag="b" variant="counter" class="faq__more-count">
				+{{ hiddenItemsCount }}
			</UiCaption>

			<UiCaption tag="span" variant="accent" class="faq__more-text">
				Показать ещё вопросы
			</UiCaption>

			<UiIcon name="plus" class="faq__more-icon" />
		</button>

		<div class="faq__cta">
			<UiCaption variant="accent" class="faq__cta-text">
				{{ content.questionCta.text }}
			</UiCaption>

			<UiButton
				type="button"
				:text="content.questionCta.buttonText"
				size="sm"
				theme="light"
				class="faq__cta-button"
			>
				<template #right>
					<UiButtonArrow class="faq__cta-icon" />
				</template>
			</UiButton>
		</div>

		<FaqHelp
			class="faq__help-card"
			:title="content.helpCard.title"
			:phone-label="content.helpCard.phoneLabel"
			:phone-prefix="content.helpCard.phonePrefix"
			:phone-main="content.helpCard.phoneMain"
			:phone-href="content.helpCard.phoneHref"
			:messengers-label="content.helpCard.messengersLabel"
			:messengers="content.helpCard.messengers"
		/>
	</section>
</template>

<script setup lang="ts">
	import { computed, ref } from 'vue'
	import { useMediaQuery } from '@vueuse/core'
	import FaqItem from './FaqItem.vue'
	import FaqHelp from './FaqHelp.vue'
	import { FAQ_INITIAL_VISIBLE_COUNT, FAQ_SECTION_CONTENT } from './constants'
	import type { FaqItem as FaqItemType } from './types'

	const content = FAQ_SECTION_CONTENT
	const isExpanded = ref(false)
	const isMobile = useMediaQuery('(max-width: 1439px)')

	const hasHiddenItems = computed(() => content.items.length > FAQ_INITIAL_VISIBLE_COUNT)

	const hiddenItemsCount = computed(() =>
		Math.max(content.items.length - FAQ_INITIAL_VISIBLE_COUNT, 0)
	)

	const visibleItems = computed<FaqItemType[]>(() => {
		if (isExpanded.value) {
			return content.items
		}

		return content.items.slice(0, FAQ_INITIAL_VISIBLE_COUNT)
	})

	const showAll = (): void => {
		isExpanded.value = true
	}
</script>

<style scoped lang="scss">
	@use './faq.scss';
</style>