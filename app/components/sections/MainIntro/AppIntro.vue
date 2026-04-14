<template>
	<section class="app-intro" aria-labelledby="app-intro-title">
		<div class="app-intro__content">
			<UiCaption tag="p" class="app-intro__lead">
				<template v-for="(line, index) in introContent.lead" :key="`lead-${index}`">
					{{ line }}
					<br v-if="index !== introContent.lead.length - 1">
				</template>
			</UiCaption>

			<UiTitle tag="h1" variant="primary" class="app-intro__title">
				{{ introContent.title }}
			</UiTitle>

			<div class="app-intro__actions">
				<UiButton v-for="action in introContent.actions" :key="action.id" :text="action.text" :to="action.to"
					:href="action.href" :target="action.target" :rel="action.rel" :type="action.type"
					:variant="action.variant" class="app-intro__action">
					<template v-if="action.icon" #right>
						<UiButtonArrow class="app-intro__action-icon" variant="small" position="rotated" />
					</template>
				</UiButton>
			</div>
		</div>
		<!-- Image zone -->
		<div class="app-intro__media" aria-hidden="true">
			<div class="app-intro__shape app-intro__shape--top-left" />
			<div class="app-intro__shape app-intro__shape--top-center" />
			<div class="app-intro__shape app-intro__shape--top-right" />
			<div class="app-intro__shape app-intro__shape--bottom-center" />

			<div v-for="image in introContent.images" :key="image.id" class="app-intro__card"
				:class="`app-intro__card--${image.name}`">
				<img :src="image.src" :alt="image.alt" class="app-intro__image">
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import UiButton from "~/components/ui/UiButton/UiButton.vue";
	import UiIcon from "~/components/ui/UiIcon/UiIcon.vue";
	import { APP_INTRO_CONTENT } from "./constants"

	const introContent = APP_INTRO_CONTENT
</script>

<style lang="scss">
  @use './app-intro.scss';
</style>