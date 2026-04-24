import { computed, reactive, watch } from "vue";
import { isPhoneFilled, isPhoneValid } from "~/utils/form/phone";
import {
  FEEDBACK_FORM_INITIAL_ERRORS,
  FEEDBACK_FORM_INITIAL_STATE,
  FEEDBACK_SECTION_CONTENT,
} from "~/components/sections/Feedback/constants";
import type {
  FeedbackFormErrors,
  FeedbackFormState,
} from "~/components/sections/Feedback/types";

export const useFeedbackForm = () => {
  const form = reactive<FeedbackFormState>({
    topics: [...FEEDBACK_FORM_INITIAL_STATE.topics],
    name: FEEDBACK_FORM_INITIAL_STATE.name,
    phone: FEEDBACK_FORM_INITIAL_STATE.phone,
    callDay: FEEDBACK_FORM_INITIAL_STATE.callDay,
    callTime: FEEDBACK_FORM_INITIAL_STATE.callTime,
    isPrivacyAccepted: FEEDBACK_FORM_INITIAL_STATE.isPrivacyAccepted,
  });

  const errors = reactive<FeedbackFormErrors>({
    ...FEEDBACK_FORM_INITIAL_ERRORS,
  });

  const hasErrors = computed(() => {
    return Boolean(
      errors.topics ||
      errors.name ||
      errors.phone ||
      errors.privacy ||
      errors.submit,
    );
  });

  // NEW: состояние "форма ещё не готова к отправке"
  // Важно: это НЕ нативный disabled кнопки, а логическое состояние.
  const isSubmitDisabled = computed(() => {
    return (
      !isPhoneValid(form.phone) || !form.callTime || !form.isPrivacyAccepted
    );
  });

  const clearSubmitError = () => {
    errors.submit = "";
  };

  const resetErrors = () => {
    errors.topics = "";
    errors.name = "";
    errors.phone = "";
    errors.privacy = "";
    errors.submit = "";
  };

  const resetForm = () => {
    form.topics = [...FEEDBACK_FORM_INITIAL_STATE.topics];
    form.name = FEEDBACK_FORM_INITIAL_STATE.name;
    form.phone = FEEDBACK_FORM_INITIAL_STATE.phone;
    form.callDay = FEEDBACK_FORM_INITIAL_STATE.callDay;
    form.callTime = FEEDBACK_FORM_INITIAL_STATE.callTime;
    form.isPrivacyAccepted = FEEDBACK_FORM_INITIAL_STATE.isPrivacyAccepted;
  };

  const resetAll = () => {
    resetForm();
    resetErrors();
  };

  const setTopic = (value: string, checked: boolean) => {
    if (checked) {
      if (!form.topics.includes(value)) {
        form.topics = [...form.topics, value];
      }
    } else {
      form.topics = form.topics.filter((item) => item !== value);
    }

    if (errors.topics) {
      validateTopics();
    }

    clearSubmitError();
  };

  // Темы сейчас не обязательные.
  // Метод оставлен, чтобы быстро вернуть required-логику при изменении ТЗ.
  const validateTopics = (): boolean => {
    errors.topics = "";
    return true;
  };

  // Имя сейчас не обязательное.
  // Метод оставлен, чтобы быстро вернуть required-логику при изменении ТЗ.
  const validateName = (): boolean => {
    errors.name = "";
    return true;
  };

  const validatePhoneField = (): boolean => {
    if (!isPhoneFilled(form.phone)) {
      errors.phone = FEEDBACK_SECTION_CONTENT.phoneRequiredError;
      return false;
    }

    if (!isPhoneValid(form.phone)) {
      errors.phone = FEEDBACK_SECTION_CONTENT.phoneInvalidError;
      return false;
    }

    errors.phone = "";
    return true;
  };

  // NEW: время звонка обязательно, но отдельного текста ошибки у него нет
  // Ошибка отображается через is-error на UiFieldSelect и общий текст возле submit.
  const validateCallTime = (): boolean => {
    return Boolean(form.callTime);
  };

  const validatePrivacy = (): boolean => {
    if (!form.isPrivacyAccepted) {
      errors.privacy = FEEDBACK_SECTION_CONTENT.privacyRequiredError;
      return false;
    }

    errors.privacy = "";
    return true;
  };

  const validateForm = (): boolean => {
    const isPhoneFieldValid = validatePhoneField();

    // NEW
    const isCallTimeValid = validateCallTime();

    const isPrivacyValid = validatePrivacy();

    // NEW: обязательные поля сейчас — телефон, время звонка, согласие
    const isValid = isPhoneFieldValid && isCallTimeValid && isPrivacyValid;

    errors.submit = isValid ? "" : FEEDBACK_SECTION_CONTENT.submitErrorText;

    return isValid;
  };

  const getPayload = () => {
    return {
      topics: [...form.topics],
      name: form.name.trim(),
      phone: form.phone,
      callDay: form.callDay,
      callTime: form.callTime,
      isPrivacyAccepted: form.isPrivacyAccepted,
    };
  };

  watch(
    () => form.name,
    () => {
      if (errors.name) {
        validateName();
      }

      clearSubmitError();
    },
  );

  watch(
    () => form.phone,
    () => {
      if (errors.phone) {
        validatePhoneField();
      }

      clearSubmitError();
    },
  );

  // NEW
  watch(
    () => form.callTime,
    () => {
      clearSubmitError();
    },
  );

  watch(
    () => form.isPrivacyAccepted,
    () => {
      if (errors.privacy) {
        validatePrivacy();
      }

      clearSubmitError();
    },
  );

  watch(
    () => form.topics,
    () => {
      if (errors.topics) {
        validateTopics();
      }

      clearSubmitError();
    },
    { deep: true },
  );

  return {
    form,
    errors,
    hasErrors,

    // NEW
    isSubmitDisabled,

    setTopic,
    validateTopics,
    validateName,
    validatePhoneField,

    // NEW
    validateCallTime,

    validatePrivacy,
    validateForm,
    clearSubmitError,
    resetErrors,
    resetForm,
    resetAll,
    getPayload,
  };
};
