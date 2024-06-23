export const Tabs = {
  defaultProps: {
    size: "md",
  },

  baseStyle: {
    tab: {
      fontSize: "16px",
      fontWeight: "500",
      borderRadius: "4px",
      _selected: {
        color: "var(--primarycontent)",
        bg: "var(--primary)",
      },
    },
  },
};
