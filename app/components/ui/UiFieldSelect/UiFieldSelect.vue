<template>
	<div
		ref="root"
		class="ui-field-select"
		:class="{
			'is-open': isOpen,
			'is-disabled': disabled,
			'is-placeholder': !selectedOption,
		}"
	>
		<button
			type="button"
			class="ui-field-select__trigger"
			:disabled="disabled"
			:aria-expanded="isOpen"
			:aria-haspopup="'listbox'"
			@click="toggleSelect"
		>
			<UiCaption tag="span" variant="description-sm" class="ui-field-select__text">
				{{ selectedOption?.label || placeholder }}
			</UiCaption>
			<UiIcon name="select-arrow" class="ui-field-select__icon" />
		</button>

		<div v-if="isOpen" class="ui-field-select__dropdown">
			<ul class="ui-field-select__list" role="listbox">
				<li
					v-for="option in options"
					:key="option.value"
					class="ui-field-select__item"
				>
					<button
						type="button"
						class="ui-field-select__option"
						:class="{ 'is-selected': option.value === modelValue }"
						@click="selectOption(option.value)"
					>
						<UiCaption tag="span" variant="description-sm" class="ui-field-select__text">
							{{ option.label }}
						</UiCaption>
					</button>
				</li>
			</ul>
		</div>

		<input
			v-if="name"
			type="hidden"
			:name="name"
			:value="modelValue"
		>
	</div>
</template>

<script setup lang="ts">
	import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
	import type { UiFieldSelectProps } from './types'

	const props = withDefaults(defineProps<UiFieldSelectProps>(), {
		modelValue: '',
		name: '',
		placeholder: '',
		disabled: false,
	})

	const emit = defineEmits<{
		(e: 'update:modelValue', value: string): void
	}>()

	const root = ref<HTMLElement | null>(null)
	const isOpen = ref(false)

	const selectedOption = computed(() => {
		return props.options.find((option) => option.value === props.modelValue)
	})

	const closeSelect = () => {
		isOpen.value = false
	}

	const toggleSelect = () => {
		if (props.disabled) {
			return
		}

		isOpen.value = !isOpen.value
	}

	const selectOption = (value: string) => {
		emit('update:modelValue', value)
		closeSelect()
	}

	const handleClickOutside = (event: MouseEvent) => {
		if (!root.value) {
			return
		}

		const target = event.target as Node

		if (!root.value.contains(target)) {
			closeSelect()
		}
	}

	const handleKeydown = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			closeSelect()
		}
	}

	onMounted(() => {
		document.addEventListener('click', handleClickOutside)
		document.addEventListener('keydown', handleKeydown)
	})

	onBeforeUnmount(() => {
		document.removeEventListener('click', handleClickOutside)
		document.removeEventListener('keydown', handleKeydown)
	})
</script>

<style scoped lang="scss">
	@use './ui-field-select.scss';
</style>