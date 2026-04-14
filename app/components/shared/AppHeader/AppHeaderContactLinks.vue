<template>
	<ul class="app-header-contacts__list" :class="[
		`app-header-contacts__list--${variant}`,
		`app-header-contacts__list--${type}`,
	]">
		<li v-for="item in items" :key="item.id" class="app-header-contacts__item">
			<a 
				class="app-header-contacts__link" 
				:href="item.href" 
				:target="item.target" 
				:rel="getLinkRel(item)"
				:name="item.icon"
			>
				<span v-if="item.icon && shouldShowIcons" class="app-header-contacts__icon">
					<UiIcon :name="item.icon" />
				</span>

				<span class="app-header-contact-links__label">
  					{{ variant === "dropdown" && item.desktopLabel ? item.desktopLabel : item.label }}
				</span>
			</a>
		</li>
	</ul>
</template>

<script setup lang="ts">
import { computed } from "vue";

import UiIcon from "@/components/ui/UiIcon/UiIcon.vue";

import type {
	AppHeaderContactLink,
	AppHeaderContactLinksType,
	AppHeaderContactLinksVariant,
} from "./types";

interface Props {
	items: AppHeaderContactLink[];
	variant?: AppHeaderContactLinksVariant;
	type?: AppHeaderContactLinksType;
}

const props = withDefaults(defineProps<Props>(), {
	variant: "dropdown",
	type: "messengers",
});

function getLinkRel(link: AppHeaderContactLink): string | undefined {
	if (link.rel) {
		return link.rel;
	}

	if (link.target === "_blank") {
		return "noopener noreferrer";
	}

	return undefined;
}

const shouldShowIcons = computed(() => {
	return !(props.variant === "mobile" && props.type === "socials");
});
</script>

<style lang="scss">
@use './app-header-contacts.scss';
</style>