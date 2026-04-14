<template>
	<NuxtLink
		:to="person.href || '/team'"
		class="team-card"
		:class="{ 'team-card--highlighted': person.isHighlighted }"
	>
		<div class="team-card__top">
			<NuxtPicture
				:src="person.imageSrc"
				:alt="person.imageAlt"
				width="335"
				loading="lazy"
				class="team-card__image"
			/>

			<span class="team-card__icon">
				<UiButtonArrow position="rotated" />
			</span>
		</div>

		<div class="team-card__body">
			<div class="team-card__info">
				<UiTitle tag="h3" variant="subtitle" class="team-card__name">
					{{ person.name }}
				</UiTitle>

				<UiCaption variant="description-sm" class="team-card__position">
					{{ person.position }}
				</UiCaption>
			</div>

			<div class="team-card__meta">
				<div class="team-card__rating">
					<UiIcon name="star-full" class="team-card__rating-icon" />

					<UiCaption tag="span" variant="description-sm" class="team-card__rating-value">
						{{ person.stats.rating.toFixed(1) }}
					</UiCaption>
				</div>

				<UiCaption tag="span" variant="description-sm" class="team-card__reviews">
					отзывов: {{ person.stats.reviewsCount }}
				</UiCaption>
			</div>

			<UiButton
				:theme="TEAM_CARD_CONSULTATION_ACTION.theme"
				:size="TEAM_CARD_CONSULTATION_ACTION.size"
				:text="TEAM_CARD_CONSULTATION_ACTION.label"
				class="team-card__consultation"
				@click.prevent.stop="handleConsultationClick"
			/>
		</div>
	</NuxtLink>
</template>

<script setup lang="ts">
	import { TEAM_CARD_CONSULTATION_ACTION } from './constants'
	import type { TeamConsultationActionPayload, TeamPerson } from './types'

	interface Props {
		person: TeamPerson
	}

	interface Emits {
		(event: 'consultation-click', payload: TeamConsultationActionPayload): void
	}

	const props = defineProps<Props>()
	const emit = defineEmits<Emits>()

	const handleConsultationClick = () => {
		emit('consultation-click', {
			actionId: TEAM_CARD_CONSULTATION_ACTION.id,
			person: props.person,
		})
	}
</script>

<style scoped lang="scss">
	@use './team-card.scss';
</style>