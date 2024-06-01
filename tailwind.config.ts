import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: ["docs/content/**/*.md"],
  plugins: [
    // ...
    require("tailwind-scrollbar"),
  ],
  theme: {
    extend: {
      animation: {
        scrollLeft: "scrollLeft 30s linear infinite",
      },
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
};
