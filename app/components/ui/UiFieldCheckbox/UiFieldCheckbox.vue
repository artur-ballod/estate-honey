<template>
	<div class="ui-field-checkbox" :class="[
		`ui-field-checkbox--${variant}`,
			{
				'is-disabled': disabled,
				'is-error': Boolean(error),
				'is-checked': modelValue,
			},
	]">
		<input :id="id" :checked="modelValue" :name="name" :disabled="disabled" :required="required"
			:aria-invalid="Boolean(error)" :aria-describedby="error ? errorId : undefined" type="checkbox"
			class="ui-field-checkbox__input" @change="handleChange" @blur="handleBlur">
		<UiCaption
			v-if="label || $slots.label"
			tag="label"
			variant="description"
			class="ui-field-checkbox__label"
			:for="id"
		>
			<slot name="label">
				{{ label }}
			</slot>
		</UiCaption>
	</div>
</template>

<script setup lang="ts">
	import { computed } from 'vue'
	import type { UiFieldCheckboxProps } from './types'

	const props = withDefaults(defineProps<UiFieldCheckboxProps>(), {
		modelValue: false,
		id: '',
		name: '',
		label: '',
		disabled: false,
		required: false,
		error: '',
		variant: 'default',
	})

	const emit = defineEmits<{
		(e: 'update:modelValue', value: boolean): void
		(e: 'blur'): void
	}>()

	const errorId = computed(() => {
		if (!props.id) {
			return undefined
		}

		return `${props.id}-error`
	})

	const handleChange = (event: Event) => {
		const target = event.target as HTMLInputElement
		emit('update:modelValue', target.checked)
	}

	const handleBlur = () => {
		emit('blur')
	}
</script>

<style scoped lang="scss">
	@use './ui-field-checkbox.scss';
</style>