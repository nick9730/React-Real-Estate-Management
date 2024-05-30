/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navbar: "#461453",
        input: "#F5F5F5",
        form: "white",
        body: "#111827",
        button: "#019AA4",
        links: "#DAD4ED",
        required: "#A3A9B4",
        navbarbuttons: "#1F1F1F",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
