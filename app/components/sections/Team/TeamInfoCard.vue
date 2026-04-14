<template>
	<div class="team-info-card" :class="`team-info-card--${card.variant}`">
		<UiCaption tag="p" variant="description-sm" class="team-info-card__text">
			{{ card.text }}
		</UiCaption>

		<div v-if="visibleActions.length" class="team-info-card__actions">
			<template v-for="action in visibleActions" :key="action.id">
				<UiButton v-if="action.type === 'link' && action.to" :to="action.to" :text="action.label"
					:theme="mapButtonTheme(action.theme)" size="sm" class="team-info-card__btn">
					<template v-if="action.showArrow" #right>
						<UiButtonArrow class="team-info-card__btn-icon"/>
					</template>
				</UiButton>

				<UiButton v-else-if="action.type === 'shuffle'" type="button" :text="action.label"
					:theme="mapButtonTheme(action.theme)" size="sm" class="team-info-card__btn"
					@click="handleActionClick(action.id)" />
			</template>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { computed } from 'vue'
	import type { TeamInfoCard, TeamInfoCardAction } from './types'

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

	const mapButtonTheme = (theme?: 'primary' | 'secondary' | 'ghost' | 'transparent') => {
		if (theme === 'primary') {
			return 'primary'
		}

		if (theme === 'transparent') {
			return 'transparent'
		}

		if (theme === 'ghost') {
			return 'ghost'
		}

		return 'large'
	}
</script>

<style scoped lang="scss">
	@use './team-info-card.scss';
</style>