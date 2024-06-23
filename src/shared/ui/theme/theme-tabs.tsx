export const Tabs = {
  defaultProps: {
    size: "md",
  },

  baseStyle: {
    tab: {
      fontSize: "24px",
      fontWeight: "700",
      borderRadius: "4px",
      _selected: {
        color: "var(--primarycontent)",
        bg: "var(--primary)",
      },
    },
  },
};
