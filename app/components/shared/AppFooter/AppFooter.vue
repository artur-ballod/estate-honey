<template>
	<footer class="app-footer">
		<div class="app-footer__top">
			<NuxtLink class="app-footer__logo" to="/" aria-label="Перейти на главную страницу">
				<img class="app-footer__logo-image" :src="logoSrc" alt="МЁД" width="130" height="55">
			</NuxtLink>
			<button class="app-footer__up" type="button" aria-label="Прокрутить страницу наверх" @click="scrollToTop">
				<svg class="app-footer__up-shape" width="167" height="176" viewBox="0 0 167 176" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M164.707 63.688C164.664 63.3211 164.625 62.9532 164.581 62.5867C162.704 48.9459 155.47 36.59 144.483 28.3131C144.46 28.2956 144.221 28.1184 144.151 28.0667C132.09 19.1157 119.011 11.3836 105.148 5.18965C104.339 4.82813 102.815 4.15679 102.012 3.827C95.9356 1.332 89.4985 0.0680973 83.0527 0C83.0489 0 83.045 0.000355195 83.0412 0.000355195C83.0374 0.000355195 83.0335 0 83.0297 0C76.5838 0.0680972 70.1467 1.332 64.0708 3.827C63.2674 4.15679 61.7435 4.82813 60.9346 5.18965C47.0711 11.3836 33.992 19.1157 21.9315 28.0667C21.8616 28.1184 21.6222 28.2956 21.5993 28.3131C10.612 36.59 3.3784 48.9459 1.50127 62.5867C1.45769 62.9532 1.41793 63.3211 1.37569 63.688C0.477548 71.5588 0 79.5582 0 87.6707C0 95.7828 0.477548 103.782 1.37569 111.653C1.41793 112.02 1.45769 112.388 1.50127 112.755C3.37467 126.367 10.5821 138.7 21.5302 146.976C21.5746 147.01 21.9278 147.268 22.0466 147.356C34.7881 156.797 48.5901 164.86 63.3265 171.207C63.5706 171.313 63.8114 171.423 64.0559 171.528C70.1361 174.025 76.5783 175.291 83.0297 175.352C83.0335 175.352 83.0374 175.352 83.0412 175.352C83.045 175.352 83.0489 175.352 83.0527 175.352C89.5041 175.291 95.9462 174.025 102.026 171.528C102.271 171.423 102.512 171.313 102.756 171.207C117.492 164.86 131.294 156.797 144.036 147.356C144.155 147.268 144.508 147.01 144.552 146.976C155.5 138.7 162.708 126.367 164.581 112.755C164.625 112.388 164.664 112.02 164.707 111.653C165.605 103.782 166.082 95.7828 166.082 87.6707C166.082 79.5582 165.605 71.5588 164.707 63.688Z" fill="#5887FF"/>
				</svg>

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

	const logoSrc = computed(() => {
		return props.theme === "dark"
			? "/images/logo-light.svg"
			: "/images/logo-dark.svg";
	});

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