<template>
	<NuxtLink :to="item.href" class="social-card" :class="socialCardClasses" :data-type="item.id">
		<template v-if="isChannelCard">
			<div class="social-card__channel" :data-type="item.id">
				<UiIcon :name="channelIcon" class="social-card__channel-icon" />

				<UiCaption tag="span" variant="micro" class="social-card__channel-label">
					{{ channelLabel }}
				</UiCaption>
			</div>

			<div class="social-card__meta">
				<UiIcon name="user" class="social-card__meta-icon" />

				<UiCaption tag="span" variant="micro" class="social-card__meta-text">
					{{ channelFollowers }}
				</UiCaption>
			</div>
		</template>

		<template v-else>
			<div class="social-card__media">
				<NuxtPicture :src="postImageSrc" :alt="postImageAlt" loading="lazy" class="social-card__image" />
				<UiShapeIcon :icon="postIcon" :size="50" class="social-card__badge" />
			</div>

			<div class="social-card__content">
				<UiCaption tag="p" variant="description" class="social-card__content-text">
					{{ postTitle }}
				</UiCaption>

				<div class="social-card__meta">
					<UiIcon name="eye-icon" class="social-card__meta-icon" />

					<UiCaption tag="span" variant="description-sm" class="social-card__meta-text">
						{{ postViews }}
					</UiCaption>
				</div>
			</div>
		</template>
	</NuxtLink>
</template>

<script setup lang="ts">
	import { computed } from 'vue'
	import type {
		SocialCardItem,
		SocialChannelCardItem,
		SocialPostCardItem,
	} from './types'

	interface Props {
		item: SocialCardItem
	}

	const props = defineProps<Props>()

	const isChannelCard = computed(
		(): boolean => props.item.variant === 'channel'
	)

	const channelItem = computed((): SocialChannelCardItem | null => {
		return props.item.variant === 'channel' ? props.item : null
	})

	const postItem = computed((): SocialPostCardItem | null => {
		return props.item.variant === 'post' ? props.item : null
	})

	const socialCardClasses = computed(() => [
		`social-card--${props.item.variant}`,
		`social-card--${props.item.size ?? 'sm'}`,
	])

	const channelIcon = computed(() => channelItem.value?.icon ?? '')
	const channelLabel = computed(() => channelItem.value?.label ?? '')
	const channelFollowers = computed(() => channelItem.value?.followers ?? '')

	const postIcon = computed(() => postItem.value?.icon ?? '')
	const postTitle = computed(() => postItem.value?.title ?? '')
	const postImageSrc = computed(() => postItem.value?.imageSrc ?? '')
	const postImageAlt = computed(() => postItem.value?.imageAlt ?? '')
	const postViews = computed(() => postItem.value?.views ?? '')
</script>

<style scoped lang="scss">
	@use './social-card.scss';
</style>