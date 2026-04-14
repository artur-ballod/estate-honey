<template>
	<article class="blog-card">
		<NuxtLink :to="article.to" class="blog-card__link">
			<NuxtPicture format="webp" :src="article.imageSrc" :alt="article.imageAlt" loading="lazy" class="blog-card__image" />

			<div class="blog-card__body">
				<div class="blog-card__meta">
					<UiCaption tag="span" variant="description-sm" class="blog-card__date">
						{{ article.meta.date }}
					</UiCaption>

					<UiCaption tag="span" variant="description-sm" class="blog-card__category">
						<UiIcon name="hash-icon" class="blog-card__category-icon" />
						{{ article.meta.category }}
					</UiCaption>
				</div>

				<UiTitle tag="h3" variant="subtitle" class="blog-card__title">
					{{ article.title }}
				</UiTitle>
				
				<div class="blog-card__bottom">
					<UiCaption variant="description-sm" class="blog-card__description">
						{{ article.description }}
					</UiCaption>
					
					<div class="blog-card__stats">
						<span class="blog-card__stat">
							<UiIcon name="eye-icon" class="blog-card__stat-icon" />
							<UiCaption tag="span" variant="micro" class="blog-card__stat-value">
								{{ article.meta.views }}
							</UiCaption>
						</span>

						<span class="blog-card__stat">
							<UiIcon name="like-icon" class="blog-card__stat-icon" />
							<UiCaption tag="span" variant="micro" class="blog-card__stat-value">
								{{ article.meta.likes }}
							</UiCaption>
						</span>
					</div>
				</div>

				<UiButtonArrow class="blog-card__icon" position="rotated" />
			</div>
		</NuxtLink>
	</article>
</template>

<script setup lang="ts">
	import type { BlogCardItem } from './types'

	interface Props {
	article: BlogCardItem
	}

	defineProps<Props>()
</script>

<style scoped lang="scss">
	@use './blog-card.scss';
</style>