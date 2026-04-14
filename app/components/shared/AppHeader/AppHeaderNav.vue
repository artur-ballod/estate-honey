<template>
	<nav class="app-header-nav" :class="`app-header-nav--${variant}`"
		:aria-label="variant === 'desktop' ? 'Основная навигация' : 'Мобильная навигация'">
		<template v-if="variant === 'mobile'">
			<p class="app-header-nav__title">
				Навигация
			</p>

			<ul class="app-header-nav__list">
				<li v-for="item in items" :key="item.id" class="app-header-nav__item" :class="{
					'is-active': isNavItemActive(item),
					'has-children': hasChildren(item),
				}">
					<NuxtLink v-if="item.to" class="app-header-nav__link" :to="item.to" @click="emit('navigate')">
						{{ item.label }}
					</NuxtLink>

					<template v-else>
						<div class="app-header-nav__subgroup">
							<p class="app-header-nav__title">
								{{ item.label }}
							</p>

							<ul v-if="hasChildren(item)" class="app-header-nav__sublist">
								<li v-for="child in item.children" :key="child.id" class="app-header-nav__subitem">
									<NuxtLink class="app-header-nav__sublink" :to="child.to" @click="emit('navigate')">
										{{ child.label }}
									</NuxtLink>
								</li>
							</ul>
						</div>
					</template>
				</li>
			</ul>
		</template>

		<template v-else>
			<ul class="app-header-nav__list">
				<li v-for="item in items" :key="item.id" class="app-header-nav__item" :class="{
					'is-active': isNavItemActive(item),
					'is-open': openedDropdownId === item.id,
					'has-children': hasChildren(item),
				}" @mouseenter="hasChildren(item) ? emit('openDropdown', item.id) : undefined"
					@mouseleave="hasChildren(item) ? emit('closeDropdown') : undefined">
					<NuxtLink v-if="item.to" class="app-header-nav__link" :to="item.to">
						{{ item.label }}
					</NuxtLink>

					<template v-else>
						<button 
							class="app-header-nav__link app-header-nav__link--button" 
							type="button"
							:aria-expanded="openedDropdownId === item.id" 
							@click="emit('toggleDropdown', item.id)"
						>
							<span>{{ item.label }}</span>
							<span class="app-header-nav__link-btn">
								<UiIcon name="chevron-down" class="app-header-nav__link-icon" />
							</span>
						</button>
					</template>

					<div v-if="hasChildren(item) && openedDropdownId === item.id" class="app-header-nav__dropdown">
						<ul class="app-header-nav__sublist">
							<li v-for="child in item.children" :key="child.id" class="app-header-nav__subitem">
								<NuxtLink class="app-header-nav__sublink" :to="child.to">
									{{ child.label }}
								</NuxtLink>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</template>
	</nav>
</template>

<script setup lang="ts">
	import { useRoute } from "vue-router";

	import type {
		AppHeaderNavItem,
		AppHeaderNavVariant,
	} from "./types";

	interface Props {
		items: AppHeaderNavItem[];
		variant?: AppHeaderNavVariant;
		openedDropdownId?: string | null;
	}

	const props = withDefaults(defineProps<Props>(), {
		variant: "desktop",
		openedDropdownId: null,
	});

	const emit = defineEmits<{
		openDropdown: [id: string];
		closeDropdown: [];
		toggleDropdown: [id: string];
		navigate: [];
	}>();

	const route = useRoute();

	function hasChildren(item: AppHeaderNavItem): boolean {
		return Boolean(item.children?.length);
	}

	function isRouteActive(path?: string): boolean {
		if (!path) {
			return false;
		}

		if (path === "/") {
			return route.path === "/";
		}

		return route.path.startsWith(path);
	}

	function isNavItemActive(item: AppHeaderNavItem): boolean {
		if (item.to) {
			return isRouteActive(item.to);
		}

		if (item.children?.length) {
			return item.children.some((child) => isRouteActive(child.to));
		}

		return false;
	}
</script>

<style lang="scss">
	@use './app-header-nav.scss';
</style>