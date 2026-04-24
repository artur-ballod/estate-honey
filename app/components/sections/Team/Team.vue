<template>
	<section class="team">
		<UiIcon v-if="!isMobile" name="shape-simple" class="team__shape" />
		<header class="team__header">
			<div class="team__header-top">
				<UiTitle tag="h2" variant="secondary" class="team__title">
					{{ TEAM_SECTION_CONTENT.title }}
				</UiTitle>

				<UiTitle tag="h3" variant="subtitle" class="team__subtitle">
					{{ TEAM_SECTION_CONTENT.subtitle }}
				</UiTitle>
			</div>

			<UiCaption variant="accent" class="team__description">
				{{ TEAM_SECTION_CONTENT.description }}
			</UiCaption>
		</header>

		<div class="team__list">
			<div v-for="(column, columnIndex) in personColumns" :key="`team-column-${columnIndex}`"
				class="team__column">
				<TeamPersonCard v-for="person in column" :key="person.id" :person="person" class="team__item" @consultation-click="handleConsultationClick" />

				<TeamInfoCard v-if="columnIndex === 0 && !isMobile" :card="aboutCard"
					class="team__info-item team__info-item--desktop" @action-click="handleInfoCardAction" />
			</div>
		</div>

		<div class="team__bottom">
			<TeamInfoCard v-if="isMobile" :card="aboutCard" :is-mobile="true" class="team__info-item team__info-item--mobile"
				@action-click="handleInfoCardAction" />

			<TeamInfoCard :card="careerCard" :is-mobile="true" class="team__info-item team__info-item--desktop"
				@action-click="handleInfoCardAction" />
		</div>
	</section>
</template>

<script setup lang="ts">
	import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
	import TeamPersonCard from './TeamCard.vue'
	import TeamInfoCard from './TeamInfoCard.vue'
	import { TEAM_PEOPLE } from './people.constants'
	import {
		TEAM_INFO_CARDS,
		TEAM_SECTION_CONTENT,
		TEAM_VISIBLE_PERSONS_COUNT_DESKTOP,
	} from './constants'
	import { getRandomTeamPeople, getTeamColumns } from './utils'
	import type { TeamInfoCard as TeamInfoCardType, TeamPerson } from './types'
	import type { TeamConsultationActionPayload } from './types'

	const handleConsultationClick = (payload: TeamConsultationActionPayload) => {
		console.log(payload.actionId, payload.person)

		// потом сюда:
		// isConsultationModalOpen.value = true
		// selectedPerson.value = payload.person
	}

	const isMobile = ref(false)

	let mediaQuery: MediaQueryList | null = null
	let mediaQueryHandler: (() => void) | null = null

	onMounted(() => {
		updateVisiblePeople()

		mediaQuery = window.matchMedia('(max-width: 1439px)')

		mediaQueryHandler = () => {
			isMobile.value = mediaQuery?.matches ?? false
		}

		mediaQueryHandler()
		mediaQuery.addEventListener('change', mediaQueryHandler)
	})

	onBeforeUnmount(() => {
		if (mediaQuery && mediaQueryHandler) {
			mediaQuery.removeEventListener('change', mediaQueryHandler)
		}
	})

	const visiblePeople = ref<TeamPerson[]>(
		TEAM_PEOPLE.slice(0, TEAM_VISIBLE_PERSONS_COUNT_DESKTOP),
	)

	const updateVisiblePeople = () => {
		visiblePeople.value = getRandomTeamPeople(
			TEAM_PEOPLE,
			TEAM_VISIBLE_PERSONS_COUNT_DESKTOP,
		)
	}

	const handleInfoCardAction = (actionId: string) => {
		if (actionId === 'show-more-experts') {
			updateVisiblePeople()
		}
	}

	onMounted(() => {
		updateVisiblePeople()
	})

	const aboutCard = computed<TeamInfoCardType>(() => {
		const card = TEAM_INFO_CARDS.find((item) => item.variant === 'about')

		if (!card) {
			throw new Error('Team about info card is missing')
		}

		return card
	})

	const careerCard = computed<TeamInfoCardType>(() => {
		const card = TEAM_INFO_CARDS.find((item) => item.variant === 'career')

		if (!card) {
			throw new Error('Team career info card is missing')
		}

		return card
	})

	const personColumns = computed<TeamPerson[][]>(() => {
		return getTeamColumns(visiblePeople.value)
	})
</script>

<style scoped lang="scss">
	@use './team.scss';
</style>