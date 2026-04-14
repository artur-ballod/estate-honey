<template>
	<section class="blog">
		<header class="blog__header">
			<div class="blog__info">
				<UiTitle tag="h2" variant="secondary" class="blog__title">
					{{ BLOG_CONTENT.title }}
				</UiTitle>

				<UiCaption variant="accent" class="blog__description">
					{{ BLOG_CONTENT.description }}
				</UiCaption>
			</div>

			<nav class="blog__categories" :aria-label="BLOG_CONTENT.categoriesAriaLabel">
				<ul class="blog__categories-list">
					<li v-for="link in BLOG_LINKS" :key="link.id" class="blog__categories-item">
						<UiButton :to="link.to" :text="link.label" :count="link.count" variant="tab" class="blog__categories-button">
							<template #right>
								<UiCaption tag="span" variant="micro" >
									{{ link.count }}
								</UiCaption>
							</template>
						</UiButton>
					</li>
				</ul>
			</nav>
		</header>

		<ul class="blog__list">
			<li v-for="article in BLOG_ARTICLES" :key="article.id" class="blog__item">
				<BlogCard :article="article" />
			</li>
		</ul>

		<UiButton :to="BLOG_CONTENT.buttonTo" :text="BLOG_CONTENT.buttonText" variant="large-dark"
			class="blog__button">
			<template #right>
				<UiButtonArrow class="blog__button-icon" variant="small" />
			</template>
		</UiButton>
	</section>
</template>

<script setup lang="ts">
	import BlogCard from './BlogCard.vue'
	import { BLOG_ARTICLES, BLOG_CONTENT, BLOG_LINKS } from './constants'
</script>

<style scoped lang="scss">
	@use './blog.scss';
</style>