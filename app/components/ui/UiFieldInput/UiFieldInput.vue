<template>
	<input 
		:id="id" 
		:value="displayValue" 
		:name="name" 
		:type="type" 
		:placeholder="placeholder"
		:autocomplete="autocomplete" 
		:inputmode="inputmode" 
		:disabled="disabled" 
		:readonly="readonly"
		:required="required" 
		:maxlength="maxLength" 
		:aria-invalid="Boolean(error)"
		:aria-describedby="error ? errorId : undefined" 
		:class="{
			'is-disabled': disabled,
			'is-error': Boolean(error),
		}"
		class="ui-field-input" 
		@beforeinput="handleBeforeInput"
		@input="handleInput"
		@blur="handleBlur"
	/>
</template>

<script setup lang="ts">
	import { computed } from 'vue'
	import { formatPhone, normalizePhone } from '~/utils/form/phone'
	import type { UiFieldInputProps } from './types'

	const PHONE_MASK_MAX_LENGTH = 18

	const props = withDefaults(defineProps<UiFieldInputProps>(), {
		modelValue: '',
		id: '',
		name: '',
		type: 'text',
		placeholder: '',
		autocomplete: '',
		inputmode: 'text',
		disabled: false,
		readonly: false,
		required: false,
		error: '',
		mask: null,
	})

	const emit = defineEmits<{
		(e: 'update:modelValue', value: string): void
		(e: 'blur'): void
	}>()

	const errorId = computed(() => {
		if (!props.id) {
			return undefined
		}

		return `${props.id}-error`
	})

	const maxLength = computed(() => {
		if (props.mask === 'phone') {
			return PHONE_MASK_MAX_LENGTH
		}

		return undefined
	})

	const displayValue = computed(() => {
		if (props.mask === 'phone') {
			return formatPhone(props.modelValue ?? '')
		}

		return props.modelValue ?? ''
	})

	const handleBeforeInput = (event: InputEvent) => {
		if (props.mask !== 'phone') {
			return
		}

		if (!event.data) {
			return
		}

		if (!/^\d+$/.test(event.data)) {
			event.preventDefault()
		}
	}

	const handleInput = (event: Event) => {
		const target = event.target as HTMLInputElement
		const rawValue = target.value

		if (props.mask === 'phone') {
			const normalizedValue = normalizePhone(rawValue).slice(0, 11)
			emit('update:modelValue', normalizedValue)
			return
		}

		emit('update:modelValue', rawValue)
	}

	const handleBlur = () => {
		emit('blur')
	}
</script>

<style scoped lang="scss">
	@use './ui-field-input.scss';
</style>