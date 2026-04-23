<template>
	<UiButton
		variant="menu"
		type="button"
		class="app-header-mobile-close"
		text="Закрыть меню"
		@click="$emit('click')"
	>
		<template #right>
			<UiIcon name="shape-bg" class="app-header-mobile-close__bg" />
			<UiIcon name="cross-sm" class="app-header-mobile-close__cross" />
		</template>
	</UiButton>
</template>

<script setup lang="ts">
	defineEmits<{
		(e: "click"): void;
	}>();
</script>

<style lang="scss">
  @use './app-header-mobile-close.scss';
</style>