<template>
	<div class="team-info-card" :class="`team-info-card--${card.variant}`">
		<UiCaption tag="p" variant="description-sm" class="team-info-card__text">
			{{ card.text }}
		</UiCaption>

		<div v-if="visibleActions.length" class="team-info-card__actions">
			<template v-for="action in visibleActions" :key="action.id">
				<UiButton v-if="action.type === 'link' && action.to" :to="action.to" :text="action.label"
					:variant="action.variant" class="team-info-card__btn">
					<template v-if="action.showArrow" #right>
						<span class="team-info-card__btn-icon">
							<UiIcon name="shape-bg" class="team-info-card__btn-bg" />
							<UiIcon name="arrow-right-sm" class="team-info-card__btn-arrow" />
						</span>
					</template>
				</UiButton>

				<UiButton v-else-if="action.type === 'shuffle'" type="button" :text="action.label"
					:variant="action.variant" class="team-info-card__btn"
					@click="handleActionClick(action.id)" />
			</template>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { computed } from 'vue'
	import type { TeamInfoCard, TeamInfoCardAction } from './types'
import { U } from 'vue-router/dist/index-BzEKChPW.js'

	interface Props {
		card: TeamInfoCard
		isMobile?: boolean
	}

	interface Emits {
		(event: 'action-click', actionId: string): void
	}

	const props = withDefaults(defineProps<Props>(), {
		isMobile: false,
	})

	const emit = defineEmits<Emits>()

	const visibleActions = computed(() => {
		return (props.card.actions || []).filter((action) => {
			if (props.isMobile && action.hideOnMobile) {
				return false
			}

			return true
		})
	})

	const handleActionClick = (actionId: TeamInfoCardAction['id']) => {
		emit('action-click', actionId)
	}
</script>

<style scoped lang="scss">
	@use './team-info-card.scss';
</style>