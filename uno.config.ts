import presetWind4 from "@unocss/preset-wind4";
import { defineConfig } from "unocss";

export default defineConfig({
	presets: [presetWind4()],
	rules: [],
	shortcuts: [],
	theme: {
		colors: {
			primary: {
				50: "#E6E6FF",
				100: "#D2D1FF",
				200: "#A09EFF",
				300: "#7371FE",
				400: "#413EFE",
				500: "#1511FE",
				600: "#0401D5",
				700: "#0301A3",
				800: "#02006B",
				900: "#010038",
				950: "#010019",
			},
			mercury: {
				50: "#FAFAFA",
				100: "#F2F2F2",
				200: "#E8E8E8",
				300: "#DBDBDC",
				400: "#CECFCF",
				500: "#C4C4C5",
				600: "#B7B8B9",
				700: "#888A8B",
				800: "#5B5C5D",
				900: "#2D2E2F",
				950: "#171717",
			},
		},
	},
});
