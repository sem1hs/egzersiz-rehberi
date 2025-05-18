export const capitalize = (str: string): string => {
  if (!str) {
    return "";
  }
  return str[0].toUpperCase().concat(str.slice(1));
};
