export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const addPeriodAtEnd = (text) => {
  if (!text.endsWith(".")) {
    return text + ".";
  }
  return text;
};
