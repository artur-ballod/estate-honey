<template>
	<div class="faq-help">
		<UiTitle tag="h3" variant="subtitle" class="faq-help__title">
			{{ title }}
		</UiTitle>

		<div class="faq-help__contacts">
			<div class="faq-help__phone">
				<UiCaption variant="description-sm" class="faq-help__phone-label">
					{{ phoneLabel }}
				</UiCaption>

				<a :href="phoneHref" class="faq-help__phone-link" :aria-label="`${phonePrefix} ${phoneMain}`">
					<span class="faq-help__phone-prefix">{{ phonePrefix }}</span>
					<span class="faq-help__phone-main">{{ phoneMain }}</span>
				</a>
			</div>

			<div class="faq-help__messengers">
				<UiCaption variant="description-sm" class="faq-help__messengers-label">
					{{ messengersLabel }}
				</UiCaption>

				<ul class="faq-help__messengers-list">
					<li v-for="messenger in messengers" :key="messenger.id" class="faq-help__messengers-item">
						<a :href="messenger.href" :target="messenger.target" :rel="messenger.rel"
							:aria-label="messenger.label" class="faq-help__messengers-link">
							<UiIcon :name="messenger.icon" class="faq-help__messengers-icon" :data-type="messenger.label" />
						</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="faq-help__decor" aria-hidden="true">
			<span class="faq-help__shape faq-help__shape--left"></span>
			<span class="faq-help__shape faq-help__shape--center"></span>
			<span class="faq-help__shape faq-help__shape--right"></span>
		</div>
	</div>
</template>

<script setup lang="ts">
	import type { FaqContactLink } from './types'

	interface Props {
		title: string
		phoneLabel: string
		phonePrefix: string
		phoneMain: string
		phoneHref: string
		messengersLabel: string
		messengers: FaqContactLink[]
	}

	defineProps<Props>()
</script>

<style scoped lang="scss">
	@use './faq-help.scss';
</style>