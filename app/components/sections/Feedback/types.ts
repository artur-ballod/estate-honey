export interface FeedbackTopic {
  id: string
  value: string
  label: string
}

export interface FeedbackCallDayOption {
  id: string
  value: string
  label: string
}

export interface FeedbackCallTimeOption {
  value: string
  label: string
}

export interface FeedbackSectionContent {
  title: string
  description: string
  topicsLabel: string
  contactsLabel: string
  namePlaceholder: string
  phonePlaceholder: string
  callDayLabel: string
  callTimePlaceholder: string
  privacyLabel: string
  submitText: string
  submitErrorText: string
  topicsRequiredError: string
  nameRequiredError: string
  phoneRequiredError: string
  phoneInvalidError: string
  privacyRequiredError: string
}

export interface FeedbackFormState {
  topics: string[]
  name: string
  phone: string
  callDay: string
  callTime: string
  isPrivacyAccepted: boolean
}

export interface FeedbackFormErrors {
  topics: string
  name: string
  phone: string
  privacy: string
  submit: string
}