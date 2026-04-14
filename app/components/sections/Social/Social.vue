<template>
	<section class="social">
		<div class="social__top">
			<div class="social__head">
				<UiTitle v-html="content.title" tag="h2" variant="secondary" class="social__title" />
				<UiCaption variant="accent" class="social__description">
					{{ content.description }}
				</UiCaption>
			</div>

			<div class="social__channels">
				<div v-for="(column, columnIndex) in content.channels" :key="`socials-column-${columnIndex}`"
					class="social__channels-column">
					<SocialCard v-for="item in column" :key="item.id" :item="item" />
				</div>
			</div>
		</div>

		<ul class="social__posts">
			<li v-for="post in content.posts" :key="post.id" class="social__posts-item">
				<SocialCard :item="post" />
			</li>
		</ul>
	</section>
</template>

<script setup lang="ts">
	import SocialCard from './SocialCard.vue'
	import { SOCIALS_SECTION_CONTENT } from './constants'

	const content = SOCIALS_SECTION_CONTENT
</script>

<style scoped lang="scss">
	@use './social.scss';
</style>