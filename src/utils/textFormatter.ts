export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const addPeriodAtEnd = (text: string) => {
  if (!text.endsWith(".")) {
    return text + ".";
  }
  return text;
};
