export const getThemedInput = (baseStyle, colorScheme) => {
  return [
    baseStyle,
    { backgroundColor: colorScheme === "light" ? "#d3cfcf" : "#EDEFEE" },
  ];
};

export const getThemedText = (baseStyle, colorScheme) => {
  return [
    baseStyle,
    { color: colorScheme === "light" ? "#232122" : "#EDEFEE" },
  ];
};

export const getThemedBg = (colorScheme) => {
  return { backgroundColor: colorScheme === "light" ? "#dddddd" : "#333333" };
};

export const getThemedBgScreen = (baseStyle, colorScheme) => {
  return [
    baseStyle,
    { backgroundColor: colorScheme === "light" ? "#dddddd" : "#333333" },
  ];
};
