<template>
	<div class="ui-field-radio" :class="[
		`ui-field-radio--${variant}`,
		{ 'is-disabled': disabled }
	]">
		<input :id="id" :checked="modelValue === value" :name="name" :value="value" :disabled="disabled" type="radio"
			class="ui-field-radio__input" @change="handleChange">

		<UiCaption tag="label" variant="description-sm" v-if="label" class="ui-field-radio__label" :for="id">
			{{ label }}
		</UiCaption>
	</div>
</template>

<script setup lang="ts">
	import type { UiFieldRadioProps } from './types'

	const props = withDefaults(defineProps<UiFieldRadioProps>(), {
		modelValue: '',
		id: '',
		name: '',
		label: '',
		disabled: false,
		variant: 'default',
	})

	const emit = defineEmits<{
		(e: 'update:modelValue', value: string | number | boolean): void
	}>()

	const handleChange = () => {
		emit('update:modelValue', props.value)
	}
</script>

<style scoped lang="scss">
	@use './ui-field-radio.scss';
</style>