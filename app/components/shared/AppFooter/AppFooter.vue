<template>
	<footer class="app-footer">
		<div class="app-footer__visual">
			<UiIcon name="shape-bg" class="app-footer__visual-shape app-footer__visual-shape--first" />
			<UiIcon name="shape-bg" class="app-footer__visual-shape app-footer__visual-shape--second" />
			<UiIcon name="shape-simple" class="app-footer__visual-shape app-footer__visual-shape--third" />
			<UiIcon name="shape-simple" class="app-footer__visual-shape app-footer__visual-shape--fourth" />
		</div>

		<div class="app-footer__top">
			<NuxtLink class="app-footer__logo" to="/" aria-label="Перейти на главную страницу">
				<img class="app-footer__logo-image" :src="logoSrc" alt="МЁД" width="130" height="55">
			</NuxtLink>
			<button class="app-footer__up" type="button" aria-label="Прокрутить страницу наверх" @click="scrollToTop">
				<UiIcon name="btn-up-shape" class="app-footer__up-shape" />
				<UiIcon name="arrow-up" class="app-footer__up-icon" />
				<span class="app-footer__up-text">Наверх</span>
			</button>
		</div>

		<div class="app-footer__main">
			<div class="app-footer__menus">
				<nav v-for="group in footerMenus" :key="group.id" class="app-footer__menu"
					:aria-label="group.ariaLabel || group.title">
					<h2 class="app-footer__menu-title">
						{{ group.title }}
					</h2>

					<ul class="app-footer__menu-list">
						<li v-for="link in group.links" :key="link.id" class="app-footer__menu-item">
							<NuxtLink class="app-footer__menu-link" :to="link.href">
								{{ link.label }}
							</NuxtLink>
						</li>
					</ul>
				</nav>
			</div>

			<div class="app-footer__side">
				<div class="app-footer__contacts">
					<p class="app-footer__contacts-title">
						Контакты
					</p>
					<ul class="app-footer__contacts-list">
						<li v-for="contact in footerContacts" :key="contact.id" class="app-footer__contacts-item">
							<NuxtLink class="app-footer__contacts-link" :to="contact.href">
								{{ contact.label }}
							</NuxtLink>
						</li>
					</ul>
				</div>

				<nav class="app-footer__socials" aria-label="Социальные сети">
					<ul class="app-footer__socials-list">
						<li v-for="social in footerSocials" :key="social.id" class="app-footer__socials-item">
							<a class="app-footer__socials-link" :href="social.href" :target="social.target"
								:rel="social.rel" :aria-label="social.icon">
								<UiIcon :name="social.icon" class="app-footer__socials-icon" />
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>

		<div class="app-footer__bottom">
			<div class="app-footer__bottom-left">
				<NuxtLink class="app-footer__policy" :to="footerMeta.privacy.href">
					{{ footerMeta.privacy.label }}
				</NuxtLink>

				<p class="app-footer__copyright">
					{{ footerMeta.copyright }}
				</p>
			</div>

			<div class="app-footer__bottom-center">
				<p class="app-footer__summary">
					{{ footerMeta.summary }}
				</p>

				<p class="app-footer__disclaimer">
					{{ footerMeta.disclaimerLead }}
					<a
						class="app-footer__disclaimer-link"
						:href="footerMeta.projectDocsHref"
						target="_blank"
						rel="noopener noreferrer"
					>
						{{ footerMeta.projectDocsLabel }}
					</a>
					{{ " " }}
					{{ footerMeta.disclaimerTail }}
					<a
						class="app-footer__disclaimer-link"
						:href="footerMeta.phoneHref"
					>
						{{ footerMeta.phoneLabel }}
					</a>
				</p>
			</div>

			<div class="app-footer__bottom-right">
				<a class="app-footer__developer" :href="footerMeta.developer.href" :target="footerMeta.developer.target"
					:rel="footerMeta.developer.rel">
					{{ footerMeta.developer.label }}
					<UiIcon name="studio-logo" class="app-footer__developer-icon" />
				</a>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
	import "./app-footer.scss"

	import { computed } from "vue"

	import {
		APP_FOOTER_CONTACTS,
		APP_FOOTER_MENU_GROUPS,
		APP_FOOTER_META,
		APP_FOOTER_SOCIALS,
	} from "./constants"

	const footerMenus = computed(() => APP_FOOTER_MENU_GROUPS)
	const footerContacts = computed(() => APP_FOOTER_CONTACTS)
	const footerSocials = computed(() => APP_FOOTER_SOCIALS)
	const footerMeta = computed(() => APP_FOOTER_META)

	interface Props {
		theme?: "dark" | "light";
	}

	const props = withDefaults(defineProps<Props>(), {
		theme: "dark",
	});

	const runtimeConfig = useRuntimeConfig();
	const logoSrc = computed(() => {
		const fileName = props.theme === 'dark'
			? 'logo-light.svg'
			: 'logo-dark.svg'

		return `${runtimeConfig.app.baseURL}images/${fileName}`
	})

	const scrollToTop = (): void => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		})
	}
</script>

<style lang="scss">
  @use './app-footer.scss';
</style>