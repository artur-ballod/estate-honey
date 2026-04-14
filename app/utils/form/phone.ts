export const formatPhone = (value: string): string => {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (!digits) {
    return "";
  }

  let normalized = digits;

  if (normalized[0] === "8") {
    normalized = `7${normalized.slice(1)}`;
  } else if (normalized[0] !== "7") {
    normalized = `7${normalized.slice(0, 10)}`;
  }

  normalized = normalized.slice(0, 11);

  const country = normalized.slice(0, 1);
  const code = normalized.slice(1, 4);
  const part1 = normalized.slice(4, 7);
  const part2 = normalized.slice(7, 9);
  const part3 = normalized.slice(9, 11);

  let result = `+${country}`;

  if (code) {
    result += ` (${code}`;
  }

  if (code.length === 3) {
    result += ")";
  }

  if (part1) {
    result += ` ${part1}`;
  }

  if (part2) {
    result += `-${part2}`;
  }

  if (part3) {
    result += `-${part3}`;
  }

  return result;
};

export const normalizePhone = (value: string): string => {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (!digits) {
    return "";
  }

  if (digits[0] === "8") {
    return `7${digits.slice(1)}`.slice(0, 11);
  }

  if (digits[0] !== "7") {
    return `7${digits.slice(0, 10)}`.slice(0, 11);
  }

  return digits.slice(0, 11);
};

export const isPhoneFilled = (value: string): boolean => {
  return value.trim().length > 0;
};

export const isPhoneValid = (value: string): boolean => {
  return value.replace(/\D/g, "").length === 11;
};
