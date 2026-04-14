<template>
  <component :is="componentTag" :class="buttonClasses" v-bind="componentAttrs">
    <span v-if="!iconOnly" class="ui-button__text">
      {{ text }}
    </span>

    <span v-if="!iconOnly && hasCount" class="ui-button__count">
      {{ count }}
    </span>

    <span v-else-if="hasRightSlot" class="ui-button__addon" :class="{ 'ui-button__addon--only': iconOnly }">
      <slot name="right" />
    </span>
  </component>
</template>

<script setup lang="ts">
  import { computed, useSlots } from 'vue'
  import { NuxtLink } from '#components'

  interface Props {
    type?: 'button' | 'submit' | 'reset'
    to?: string
    href?: string
    target?: string
    rel?: string
    text?: string
    count?: string | number
    size?: 'sm' | 'lg' | 'free'
    theme?: 'light' | 'dark' | 'large' | 'transparent' | 'ghost' | 'primary' | 'tab'
    disabled?: boolean
    iconOnly?: boolean
    ariaLabel?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    type: 'button',
    to: '',
    href: '',
    target: '',
    rel: '',
    text: '',
    count: '',
    size: 'sm',
    theme: 'light',
    disabled: false,
    iconOnly: false,
    ariaLabel: '',
  })

  const slots = useSlots()

  const hasRightSlot = computed(() => Boolean(slots.right))

  const hasCount = computed(() => {
    return !hasRightSlot.value && props.count !== '' && props.count !== null && props.count !== undefined
  })

  const componentTag = computed(() => {
    if (props.to) return NuxtLink
    if (props.href) return 'a'
    return 'button'
  })

  const resolvedAriaLabel = computed(() => {
    if (props.ariaLabel) return props.ariaLabel
    if (props.iconOnly) return props.text || 'Button'
    return undefined
  })

  const componentAttrs = computed(() => {
    if (props.to) {
      return {
        to: props.disabled ? undefined : props.to,
        'aria-disabled': props.disabled ? 'true' : undefined,
        'aria-label': resolvedAriaLabel.value,
        tabindex: props.disabled ? -1 : undefined,
      }
    }

    if (props.href) {
      return {
        href: props.disabled ? undefined : props.href,
        target: props.target || undefined,
        rel: props.rel || (props.target === '_blank' ? 'noopener noreferrer' : undefined),
        'aria-disabled': props.disabled ? 'true' : undefined,
        'aria-label': resolvedAriaLabel.value,
        tabindex: props.disabled ? -1 : undefined,
      }
    }

    return {
      type: props.type,
      disabled: props.disabled,
      'aria-label': resolvedAriaLabel.value,
    }
  })

  const buttonClasses = computed(() => [
    'ui-button',
    `ui-button--${props.size}`,
    `ui-button--${props.theme}`,
    {
      'ui-button--with-addon': hasRightSlot.value || hasCount.value,
      'ui-button--icon-only': props.iconOnly,
      'is-disabled': props.disabled,
    },
  ])
</script>

<style lang="scss">
  @use './ui-button.scss';
</style>