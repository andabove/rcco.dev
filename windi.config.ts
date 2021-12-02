import { defineConfig } from "windicss/helpers";

export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        mono: ["Azeret Mono", "monospace"],
      },
      colors: {
        secondary: "#D20B5B",
        "big-stone": {
          "50": "#f2f4f5",
          "100": "#e6e9eb",
          "200": "#bfc8cc",
          "300": "#99a7ae",
          "400": "#4d6471",
          "500": "#002234",
          "600": "#001f2f",
          "700": "#001a27",
          "800": "#00141f",
          "900": "#001119",
        },
      },
    },
  },
});
