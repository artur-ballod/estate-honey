<template>
	<section class="process" aria-labelledby="process-title">
		<div class="process__head">
			<UiTitle tag="h2" variant="secondary" class="process__title" id="process-title">
				Как мы это делаем?
			</UiTitle>
			<div class="process__visual">
				<div class="process__visual-image-wrap">
					<NuxtPicture src="/images/process/process-main-image.png" alt="Современный жилой комплекс"
						width="302" height="316" loading="lazy" class="process__visual-image" />
				</div>

				<div class="process__visual-shape process__visual-shape--primary" />
				<div class="process__visual-shape process__visual-shape--secondary" />
			</div>
		</div>
		<div class="process__layout">
			<div class="process__aside">
				<UiTitle tag="h3" variant="subtitle" class="process__intro">
					{{ PROCESS_INTRO_TEXT }}
				</UiTitle>

				<ul class="process__tabs" aria-label="Жизненные ситуации">
					<li v-for="tab in tabs" :key="tab.id" class="process__tabs-item">
						<UiTabButton class="process__tab" :active="tab.id === activeTabId"
							@click="setActiveTab(tab.id)">
							{{ tab.label }}
						</UiTabButton>
					</li>
				</ul>
			</div>

			<div class="process__content">
				<ProcessSlider :tab-id="activeTab.id" :slides="activeTab.slides" />
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { computed, ref } from 'vue'
	import ProcessSlider from './ProcessSlider.vue'
	import { PROCESS_INTRO_TEXT, PROCESS_TABS } from './constants'
	import type { ProcessTab } from './types'

	const tabs = PROCESS_TABS
	const initialTab = tabs[0]

	if (!initialTab) {
		throw new Error('PROCESS_TABS must contain at least one tab')
	}

	const activeTabId = ref<ProcessTab['id']>(initialTab.id)

	const activeTab = computed(() => {
		return tabs.find((tab) => tab.id === activeTabId.value) ?? initialTab
	})

	const setActiveTab = (tabId: ProcessTab['id']) => {
		activeTabId.value = tabId
	}
</script>

<style scoped lang="scss">
	@use './process.scss';
</style>