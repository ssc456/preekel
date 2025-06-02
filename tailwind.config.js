module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  safelist: [
    {
      pattern: /(bg|text|border)-(blue|green|red|teal|orange|slate)-(500|600)/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
