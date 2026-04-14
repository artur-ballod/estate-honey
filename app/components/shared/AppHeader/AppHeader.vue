<template>
	<header class="app-header">
		<div class="app-header__inner">
			<NuxtLink 
				class="app-header__logo" 
				to="/" 
				aria-label="На главную"
			>
				<img
					class="app-header__logo-image"
					:src="logoSrc"
					alt="МЁД"
					width="89.3"
					height="38"
				>
			</NuxtLink>

			<template v-if="isMounted">
				<AppHeaderNav 
					v-if="isDesktop" 
					class="app-header__desktop-nav" 
					:items="APP_HEADER_NAV"
					variant="desktop"
					:opened-dropdown-id="openedDropdownId" 
					@open-dropdown="openDropdown" 
					@close-dropdown="closeDropdown"
					@toggle-dropdown="toggleDropdown" 
				/>

				<div 
					v-if="isDesktop" 
					class="app-header__actions app-header__actions--desktop"
				>
					<a 
						class="app-header__phone" 
						:href="APP_HEADER_PHONE_HREF"
						:aria-label="`Позвонить ${APP_HEADER_PHONE}`"
					>
						{{ APP_HEADER_PHONE }}
					</a>

					<div 
						class="app-header__dropdown-control app-header__dropdown-control--messengers"
						@mouseenter="openDropdown('messengers')"
						@mouseleave="closeDropdown"
					>
						<button 
							class="app-header__dropdown-trigger app-header__dropdown-trigger--messengers" 
							type="button"
							:aria-expanded="openedDropdownId === 'messengers'" 
							@click="toggleDropdown('messengers')"
						>
							Написать нам
						</button>

						<div 
							v-if="openedDropdownId === 'messengers'" 
							class="app-header__dropdown-item app-header__dropdown-item--messengers"
						>
							<span class="app-header__dropdown-title">
								Мы на связи в мессенджерах
							</span>

							<AppHeaderContactLinks 
								:items="APP_HEADER_MESSENGERS" 
								variant="dropdown"
								type="messengers"
							/>
						</div>
					</div>

					<div 
						class="app-header__dropdown-control app-header__dropdown-control--socials" 
						@mouseenter="openDropdown('socials')"
						@mouseleave="closeDropdown"
					>
						<button 
							class="app-header__dropdown-trigger app-header__dropdown-trigger--socials"
							type="button" 
							aria-label="Открыть соцсети"
							:aria-expanded="openedDropdownId === 'socials'" 
							@click="toggleDropdown('socials')"
						>
							<UiIcon name="social-icon" class="app-header__dropdown-icon" />
						</button>

						<div 
							v-if="openedDropdownId === 'socials'"
							class="app-header__dropdown-item app-header__dropdown-item--socials"
						>
							<span class="app-header__dropdown-title">
								Мы в соцсетях
							</span>
							
							<AppHeaderContactLinks 
								:items="APP_HEADER_SOCIALS" 
								variant="dropdown"
								type="socials"
							/>

							<p class="app-header__dropdown-note">
								{{ APP_HEADER_NOTE }}
							</p>
						</div>
					</div>
				</div>
				<!-- Mobile Contacts -->
				<div 
					v-else 
					class="app-header__actions app-header__actions--mobile"
				>
					<button class="app-header__actions-trigger" type="button" @click="openMobileContacts">
						Связаться с нами
					</button>

					<button 
						class="app-header__actions-toggle" 
						:class="{ 'is-active': isMobilePanelOpen }" 
						type="button"
						:aria-expanded="isMobilePanelOpen"
						:aria-label="isMobilePanelOpen ? 'Закрыть меню' : 'Открыть меню'" 
						@click="toggleMobileMenu"
					>
						<UiIcon 
							:name="isMobilePanelOpen ? 'close-icon' : 'menu-icon'" 
							class="app-header__actions-toggle-icon"
						/>
					</button>
				</div>
			</template>
		</div>

		<Transition name="app-header-mobile">
			<div
				v-if="isMounted && !isDesktop && isMobilePanelOpen"
				class="app-header__mobile-panel"
			>
				<div class="app-header__mobile-body">
					<AppHeaderNav
						v-if="mobileView === 'nav'"
						:items="APP_HEADER_NAV"
						variant="mobile"
						@navigate="closeMobilePanel"
					/>

					<div
						v-else
						class="app-header-contacts app-header-contacts--mobile"
					>
						<a
							class="app-header-contacts__phone"
							:href="APP_HEADER_PHONE_HREF"
							:aria-label="`Позвонить ${APP_HEADER_PHONE}`"
						>

							<UiIcon name="tel-icon" class="app-header-contacts__phone-icon "/>
							{{ APP_HEADER_PHONE }}
						</a>

						<div
							v-for="group in mobileContactGroups"
							:key="group.id"
							class="app-header-contacts__group"
						>
							<p class="app-header-contacts__title">
								{{ group.title }}
							</p>

							<AppHeaderContactLinks
								:items="group.items"
								variant="mobile"
								:type="group.type"
							/>
						</div>
						<p class="app-header-contacts__note">
							{{ APP_HEADER_NOTE }}
						</p>
					</div>
				</div>
			</div>
		</Transition>
	</header>
</template>

<script setup lang="ts">
	import { onBeforeUnmount, onMounted, ref } from "vue";

	import AppHeaderContactLinks from "./AppHeaderContactLinks.vue";
	import AppHeaderNav from "./AppHeaderNav.vue";

	import {
		APP_HEADER_MESSENGERS,
		APP_HEADER_NAV,
		APP_HEADER_PHONE,
		APP_HEADER_PHONE_HREF,
		APP_HEADER_SOCIALS,
		APP_HEADER_NOTE
	} from "./constants";

	import type { AppHeaderMobileView } from "./types";

	import "./app-header.scss";

	interface Props {
		theme?: "dark" | "light";
	}

	const props = withDefaults(defineProps<Props>(), {
		theme: "dark",
	});

	const isMounted = ref(false);
	const isDesktop = ref(false);

	const isMobilePanelOpen = ref(false);
	const mobileView = ref<AppHeaderMobileView>("nav");
	const openedDropdownId = ref<string | null>(null);

	const logoSrc = computed(() => {
		return props.theme === "dark"
			? "/images/logo-light.svg"
			: "/images/logo-dark.svg";
	});

	const mobileContactGroups = [
		{
			id: "messengers",
			title: "Мы на связи в мессенджерах",
			type: "messengers" as const,
			items: APP_HEADER_MESSENGERS,
		},
		{
			id: "socials",
			title: "Мы в соцсетях",
			type: "socials" as const,
			items: APP_HEADER_SOCIALS,
		},
	];

	let mediaQuery: MediaQueryList | null = null;

	function closeDropdown(): void {
		openedDropdownId.value = null;
	}

	function openDropdown(id: string): void {
		openedDropdownId.value = id;
	}

	function toggleDropdown(id: string): void {
		openedDropdownId.value = openedDropdownId.value === id ? null : id;
	}

	function openMobileMenu(): void {
		isMobilePanelOpen.value = true;
		mobileView.value = "nav";
		closeDropdown();
	}

	function openMobileContacts(): void {
		isMobilePanelOpen.value = true;
		mobileView.value = "contacts";
		closeDropdown();
	}

	function closeMobilePanel(): void {
		isMobilePanelOpen.value = false;
		mobileView.value = "nav";
	}

	function toggleMobileMenu(): void {
		if (isMobilePanelOpen.value) {
			closeMobilePanel();
			return;
		}

		openMobileMenu();
	}

	function getSpriteHref(icon?: string): string {
		return icon ? `#icon-${icon}` : "";
	}

	function updateIsDesktop(event?: MediaQueryListEvent): void {
		const nextValue = event ? event.matches : mediaQuery?.matches ?? false;

		isDesktop.value = nextValue;

		if (nextValue) {
			closeMobilePanel();
		}
	}

	onMounted(() => {
		isMounted.value = true;

		mediaQuery = window.matchMedia("(min-width: 1440px)");
		updateIsDesktop();

		mediaQuery.addEventListener("change", updateIsDesktop);
	});

	onBeforeUnmount(() => {
		mediaQuery?.removeEventListener("change", updateIsDesktop);
	});
</script>

<style lang="scss">
  @use './app-header.scss';
</style>