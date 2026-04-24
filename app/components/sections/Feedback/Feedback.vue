<template>
	<section class="feedback">
		<div class="feedback__visual">
			<UiIcon name="shape-simple" class="feedback__visual-shape feedback__visual-shape--first" />
			<UiIcon name="shape-simple" class="feedback__visual-shape feedback__visual-shape--second" />
		</div>

		<div class="feedback__head">
			<UiTitle tag="h2" variant="secondary" class="feedback__title">
				{{ FEEDBACK_SECTION_CONTENT.title }}
			</UiTitle>

			<UiTitle tag="p" variant="subtitle" class="feedback__description">
				<template v-for="(line, index) in descriptionLines" :key="`feedback-description-${index}`">
					<span>{{ line }}</span>
					<br v-if="index < descriptionLines.length - 1">
				</template>
			</UiTitle>
		</div>

		<form class="feedback__form" novalidate @submit.prevent="handleSubmit">
			<div class="feedback__card feedback__card--topics">
				<div class="feedback__card-top">
					<UiCaption tag="span" variant="description-sm" class="feedback__card-step">
						(01)
					</UiCaption>

					<UiCaption tag="p" variant="accent" class="feedback__card-title">
						{{ FEEDBACK_SECTION_CONTENT.topicsLabel }}
					</UiCaption>
				</div>

				<ul class="feedback__topics">
					<li v-for="topic in FEEDBACK_TOPICS" :key="topic.id" class="feedback__topics-item"
						:class="{ 'is-active': form.topics.includes(topic.value) }">
						<UiFieldCheckbox :id="`feedback-topic-${topic.id}`"
							:model-value="form.topics.includes(topic.value)" :name="`feedback-topic-${topic.id}`"
							:label="topic.label" variant="card" @update:model-value="setTopic(topic.value, $event)" />
					</li>
				</ul>

				<UiCaption v-if="errors.topics" tag="span" variant="error" class="feedback__topics-error">
					{{ errors.topics }}
				</UiCaption>
			</div>

			<div class="feedback__card feedback__card--data">
				<div class="feedback__card-top">
					<UiCaption tag="span" variant="description-sm" class="feedback__card-step">
						(02)
					</UiCaption>

					<UiCaption tag="p" variant="accent" class="feedback__card-title">
						{{ FEEDBACK_SECTION_CONTENT.contactsLabel }}
					</UiCaption>
				</div>

				<div class="feedback__fields">
					<UiFieldInput id="feedback-name" v-model="form.name" name="name" type="text"
						:placeholder="FEEDBACK_SECTION_CONTENT.namePlaceholder" autocomplete="name"
						:error="errors.name" />

					<UiFieldInput id="feedback-phone" v-model="form.phone" name="phone" type="tel"
						:placeholder="FEEDBACK_SECTION_CONTENT.phonePlaceholder" autocomplete="tel" inputmode="numeric"
						:required="true" mask="phone" :error="errors.phone" />
				</div>

				<div class="feedback__date">
					<UiCaption tag="span" variant="description-sm" class="feedback__date-label">
						{{ FEEDBACK_SECTION_CONTENT.callDayLabel }}
					</UiCaption>

					<div class="feedback__date-controls">
						<UiFieldRadio v-for="option in FEEDBACK_CALL_DAY_OPTIONS" :id="option.id" :key="option.id"
							v-model="form.callDay" name="feedback-call-day" :value="option.value"
							:label="option.label" />

						<UiFieldSelect v-model="form.callTime" name="call-time" :options="FEEDBACK_CALL_TIME_OPTIONS"
							:placeholder="FEEDBACK_SECTION_CONTENT.callTimePlaceholder" :error="isCallTimeError"
							class="feedback__date-select" />
					</div>
				</div>

				<UiFieldCheckbox id="feedback-privacy" v-model="form.isPrivacyAccepted" name="privacy"
					:error="errors.privacy" :required="true" variant="policy" class="feedback__privacy">
					<template #label>
						Согласен с&nbsp;
						<NuxtLink to="/privacy-policy" class="feedback__privacy-link">
							политикой конфиденциальности
						</NuxtLink>
						&nbsp;и даю разрешение на обработку моих персональных данных
					</template>
				</UiFieldCheckbox>

				<div class="feedback__submit">
					<UiButton type="submit" :text="FEEDBACK_SECTION_CONTENT.submitText" class="feedback__submit-btn"
						variant="neutral-border" :visually-disabled="isSubmitDisabled">
						<template #right>
							<UiButtonArrow class="feedback__submit-icon" variant="small" />
						</template>
					</UiButton>

					<UiCaption v-if="shouldShowSubmitError" tag="span" variant="error" class="feedback__submit-error">
						{{ FEEDBACK_SECTION_CONTENT.submitErrorText }}
					</UiCaption>
				</div>
			</div>
		</form>
	</section>
</template>

<script setup lang="ts">
	import { computed, ref } from "vue";
	import { useFeedbackForm } from "~/composables/forms/useFeedbackForm";
	import {
		FEEDBACK_CALL_DAY_OPTIONS,
		FEEDBACK_CALL_TIME_OPTIONS,
		FEEDBACK_SECTION_CONTENT,
		FEEDBACK_TOPICS,
	} from "./constants";

	const {
		form,
		errors,
		isSubmitDisabled,
		setTopic,
		validateForm,
		getPayload,
	} = useFeedbackForm();

	const wasSubmitAttempted = ref(false);

	const descriptionLines = computed(() => {
		return FEEDBACK_SECTION_CONTENT.description.split("\n");
	});

	const isCallTimeError = computed(() => {
		return wasSubmitAttempted.value && !form.callTime;
	});

	const shouldShowSubmitError = computed(() => {
		return wasSubmitAttempted.value && isSubmitDisabled.value;
	});

	const handleSubmit = () => {
		wasSubmitAttempted.value = true;

		if (!validateForm()) {
			return;
		}

		const payload = getPayload();

		console.log("feedback form submit", payload);
	};
</script>

<style scoped lang="scss">
	@use "./feedback.scss";
</style>