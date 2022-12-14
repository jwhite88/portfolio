/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      offpurple: {
        50: "#c6d5ea",
        100: "#bccbe0",
        200: "#b2c1d6",
        300: "#a8b7cc",
        400: "#9eadc2",
        500: "#94a3b8",
        600: "#8a99ae",
        700: "#808fa4",
        800: "#76859a",
        900: "#6c7b90",
      },
      darkpurple: {
        50: "#96a6bd",
        100: "#8c9cb3",
        200: "#8292a9",
        300: "#78889f",
        400: "#6e7e95",
        500: "#64748b",
        600: "#5a6a81",
        700: "#506077",
        800: "#46566d",
        900: "#3c4c63",
      },
      tinygreen: {
        50: "#aac5bc",
        100: "#a0bbb2",
        200: "#96b1a8",
        300: "#8ca79e",
        400: "#829d94",
        500: "#78938a",
        600: "#6e8980",
        700: "#647f76",
        800: "#5a756c",
        900: "#506b62",
      },
      offblack: {
        50: "#585c61",
        100: "#4e5257",
        200: "#44484d",
        300: "#3a3e43",
        400: "#303439",
        500: "#262a2f",
        600: "#1c2025",
        700: "#12161b",
        800: "#080c11",
        900: "#000207",
      },
      whitemarble: {
        50: "#ffffff",
        100: "#fcfbf1",
        200: "#fefbf6",
        300: "#e9ebea",
        400: "#e9ebeb",
        500: "#fafafa",
        600: "#f0f0f0",
        700: "#e6e6e6",
        800: "#dcdcdc",
        900: "#d2d2d2",
      },
    },
  },
  plugins: [],
};
