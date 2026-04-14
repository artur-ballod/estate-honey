<template>
	<section class="catalog">
		<header class="catalog__header">
			<UiTitle tag="h2" variant="secondary" class="catalog__title">
				{{ content.title }}
			</UiTitle>

			<div class="catalog__top">
				<div class="catalog__tabs" role="tablist" aria-label="Категории каталога">
					<UiTabButton v-for="tab in content.tabs" :key="tab.id" role="tab" class="catalog__tab"
						theme="accent" :active="tab.id === activeTabId" :count="tab.count"
						:aria-selected="tab.id === activeTabId" @click="setActiveTab(tab.id)">
						{{ tab.label }}
					</UiTabButton>
				</div>

				<UiCaption tag="p" variant="accent" class="catalog__description">
					{{ activeTab.description }}
				</UiCaption>
			</div>
		</header>

		<div class="catalog__list">
			<div v-for="(column, columnIndex) in cardColumns" :key="`catalog-column-${columnIndex}`"
				class="catalog__column">
				<div v-for="item in column" :key="item.id" class="catalog__item">
					<CatalogCard :item="item" />
				</div>

				<div v-if="columnIndex === 0 && activeTab.mapLink" class="catalog__item catalog__item--map">
					<UiButton variant="large-shape" :to="activeTab.mapLink.to" class="catalog__link"
						:text="activeTab.mapLink.label">
						<template #right>
							<UiIcon name="map-pin" class="catalog__link-icon" />
						</template>
					</UiButton>
				</div>
			</div>
		</div>

		<div class="catalog__promo">
			<div class="catalog__promo-visual">
				<NuxtImg :src="content.promo.image" :alt="content.promo.imageAlt" width="600" height="420"
					loading="lazy" class="catalog__promo-image" />
			</div>

			<div class="catalog__promo-content">
				<UiTitle tag="p" variant="subtitle" class="catalog__promo-lead">
					{{ content.promo.lead }}
				</UiTitle>

				<UiTitle tag="h3" variant="secondary" class="catalog__promo-title">
					{{ content.promo.title }}
				</UiTitle>

				<UiButton :text="content.promo.buttonLabel" :to="content.promo.buttonTo" variant="primary-border"
					class="catalog__promo-button">
					<template #right>
						<UiButtonArrow position="rotated" class="catalog__promo-button-icon" variant="small" />
					</template>
				</UiButton>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { computed, ref } from 'vue'
	import CatalogCard from './CatalogCard.vue'
	import { CATALOG_SECTION_CONTENT } from './constants'
	import type { CatalogTab, CatalogTabId, CatalogCardItem } from './types'

	const content = CATALOG_SECTION_CONTENT

	const fallbackTab = content.tabs[0] as CatalogTab
	const activeTabId = ref<CatalogTabId>(fallbackTab.id)

	const activeTab = computed<CatalogTab>(() => {
		return content.tabs.find((tab) => tab.id === activeTabId.value) ?? fallbackTab
	})

	const cardColumns = computed<CatalogCardItem[][]>(() => {
		const columns: CatalogCardItem[][] = []

		for (let i = 0; i < 3; i++) {
			columns.push(activeTab.value.items.slice(i * 2, i * 2 + 2))
		}

		return columns
	})

	const setActiveTab = (tabId: CatalogTabId) => {
		activeTabId.value = tabId
	}
</script>

<style scoped lang="scss">
	@use './catalog.scss';
</style>