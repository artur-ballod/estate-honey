<template>
	<component :is="tag" class="ui-caption" :class="[
		`ui-caption--${variant}`,
		{
			'ui-caption--uppercase': uppercase,
		}
	]">
		<slot>
			{{ text }}
		</slot>
	</component>
</template>

<script setup lang="ts">
	type UiCaptionVariant = 'accent' | 'description' | 'description-sm' | 'micro' | 'number' | 'error' | 'counter'
	type UiCaptionTag = 'p' | 'span' | 'b' | 'label'

	interface Props {
		text?: string
		tag?: UiCaptionTag
		variant?: UiCaptionVariant
		uppercase?: boolean
	}

	withDefaults(defineProps<Props>(), {
		text: '',
		tag: 'p',
		variant: 'description',
		uppercase: false,
	})
</script>

<style scoped lang="scss">
	@use './ui-caption.scss';
</style>