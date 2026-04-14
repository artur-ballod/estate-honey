<template>
	<component :is="tag" class="ui-title" :class="[
		`ui-title--${variant}`,
		{ 'ui-title--uppercase': uppercase }
	]">
		<slot>
			{{ text }}
		</slot>
	</component>
</template>

<script setup lang="ts">
	type UiTitleVariant = 'primary' | 'secondary' | 'subtitle' | 'accent' | 'micro'
	type UiTitleTag = 'h1' | 'h2' | 'h3' | 'h4' | 'b' | 'p'

	interface Props {
		text?: string
		tag?: UiTitleTag
		variant?: UiTitleVariant
		uppercase?: boolean
	}

	withDefaults(defineProps<Props>(), {
		text: '',
		tag: 'h2',
		variant: 'secondary',
		uppercase: false,
	})
</script>

<style scoped lang="scss">
	@use './ui-title.scss';
</style>