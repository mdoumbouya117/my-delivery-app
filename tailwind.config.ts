import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1C3FAA', // Navy Blue
          light: '#60A5FA',  // Sky Blue
        },
        secondary: {
          gray: '#64748B',   // Cool Gray
          red: '#F87171',    // Soft Red
        },
      },
    },
  },
  plugins: [],
};
export default config;
