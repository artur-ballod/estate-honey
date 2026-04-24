<template>
  <component :is="componentTag" :class="buttonClasses" v-bind="componentAttrs">
    <UiCaption tag="span" variant="micro" v-if="!iconOnly && text" class="ui-button__text">
      {{ text }}
    </UiCaption>

    <span v-if="hasRightSlot" class="ui-button__addon" :class="{ 'ui-button__addon--only': iconOnly }">
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
    variant?: 'large' | 'large-shape' | 'large-dark' | 'primary' | 'neutral' | 'transparent' | 'ghost' | 'primary-border' | 'neutral-border' | 'tab' | 'simple' | 'simple-light' | 'simple-purple' | 'map' | 'menu'
    disabled?: boolean
    iconOnly?: boolean
    visuallyDisabled?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    type: 'button',
    to: '',
    href: '',
    target: '',
    rel: '',
    text: '',
    variant: 'primary',
    disabled: false,
    iconOnly: false,
    visuallyDisabled: false,
  })

  const slots = useSlots()

  const hasRightSlot = computed(() => Boolean(slots.right))

  const componentTag = computed(() => {
    if (props.to) return NuxtLink
    if (props.href) return 'a'
    return 'button'
  })

  const componentAttrs = computed(() => {
    if (props.to) {
      return {
        to: props.disabled ? undefined : props.to,
        'aria-disabled': props.disabled ? 'true' : undefined,
        tabindex: props.disabled ? -1 : undefined,
      }
    }

    if (props.href) {
      return {
        href: props.disabled ? undefined : props.href,
        target: props.target || undefined,
        rel: props.rel || (props.target === '_blank' ? 'noopener noreferrer' : undefined),
        'aria-disabled': props.disabled ? 'true' : undefined,
        tabindex: props.disabled ? -1 : undefined,
      }
    }

    return {
      type: props.type,
      disabled: props.disabled,
    }
  })

  const buttonClasses = computed(() => [
    'ui-button',
    `ui-button--${props.variant}`,
    {
      'ui-button--with-addon': hasRightSlot.value,
      'ui-button--icon-only': props.iconOnly,
      'is-disabled': props.disabled || props.visuallyDisabled,
    },
  ])
</script>

<style lang="scss">
  @use './ui-button.scss';
</style>