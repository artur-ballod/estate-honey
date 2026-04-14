<template>
  <component
    :is="iconComponent"
    v-if="iconComponent"
    class="ui-icon"
    aria-hidden="true"
  />
</template>

<script setup lang="ts">
	import { computed } from "vue";

	import { uiIconsRegistry } from "./registry";
	import "./ui-icon.scss";

	interface Props {
		name: string;
	}

	const props = defineProps<Props>();

	const iconComponent = computed(() => {
		return uiIconsRegistry[props.name] ?? null;
	});
</script>
