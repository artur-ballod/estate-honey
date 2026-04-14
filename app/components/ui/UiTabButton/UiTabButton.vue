<template>
	<button
		type="button"
		class="ui-tab-button"
		:class="[
			`ui-tab-button--${theme}`,
			{ 'is-active': active }
		]"
	>
		<UiCaption tag="span" variant="micro" class="ui-tab-button__text">
			<slot />
		</UiCaption>

		<UiCaption tag="span" variant="micro"  v-if="count !== undefined" class="ui-tab-button__count">
			{{ count }}
		</UiCaption>
	</button>
</template>

<script setup lang="ts">
	interface Props {
		active?: boolean
		theme?: 'default' | 'dark' | 'accent'
		count?: string | number
	}

	withDefaults(defineProps<Props>(), {
		active: false,
		theme: 'default',
		count: undefined,
	})
</script>

<style scoped lang="scss">
	@use './ui-tab-button.scss';
</style>