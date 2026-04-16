<template>
	<section class="contacts" aria-labelledby="contacts-title">
		<UiTitle id="contacts-title" tag="h2" variant="secondary" class="contacts__title">
			{{ content.title }}
		</UiTitle>

		<div class="contacts__body">
			<dl class="contacts__list">
				<div v-for="item in content.items" :key="item.id" class="contacts__row" :data-type="item.id">
					<dt class="contacts__term">
						<UiTitle tag="b" variant="accent">
							{{ item.label }}
						</UiTitle>
					</dt>

					<dd class="contacts__desc">
						<div class="contacts__text">
							<template v-for="line in item.lines" :key="line.id">
								<a v-if="line.href" :href="line.href" :target="line.target" :rel="line.rel"
									class="contacts__line contacts__line--link">
									<UiCaption tag="span" variant="description">
										{{ line.text }}
									</UiCaption>
								</a>

								<UiCaption v-else tag="p" variant="description" class="contacts__line">
									{{ line.text }}
								</UiCaption>
							</template>
						</div>

						<NuxtLink v-if="item.extraLink" :to="item.extraLink.href" class="contacts__link"
							:target="item.extraLink.target" :rel="item.extraLink.rel">
							<UiCaption tag="span" variant="micro">
								{{ item.extraLink.text }}
							</UiCaption>
						</NuxtLink>
					</dd>
				</div>
			</dl>

			<div class="contacts__map">
				<ClientOnly>
					<ContactsMap
						:coords="content.map.coords"
						:zoom="content.map.zoom"
						:marker-label="content.map.markerLabel"
						:theme="content.map.theme"
						class-name="contacts-section__map-widget"
					/>
				</ClientOnly>

				<UiButton class="contacts__map-button" :href="content.map.buttonHref" target="_blank"
					rel="noopener noreferrer" variant="map" :text="content.map.buttonText">
					<template #right>
						<UiButtonArrow class="contacts__map-icon" position="rotated" variant="small" />
					</template>
				</UiButton>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { CONTACTS_SECTION_CONTENT } from './constants'
	import type { ContactsSectionContent } from './types'

	interface Props {
		content?: ContactsSectionContent
	}

	withDefaults(defineProps<Props>(), {
		content: () => CONTACTS_SECTION_CONTENT,
	})
</script>

<style scoped lang="scss">
	@use './contacts.scss';
</style>