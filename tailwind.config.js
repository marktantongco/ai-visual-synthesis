/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      colors: {
        brutal: {
          yellow: "#FFDE00",
          yellowDark: "#E6C700",
          black: "#0D0D0D",
          blackLight: "#1A1A1A",
          cream: "#F5F5F0",
          gray: "#666666",
          grayDark: "#333333",
          accent: "#FF3366",
          accentBlue: "#0066FF",
          white: "#FAFAFA",
        },
        neon: {
          cyan: "#00F5FF",
          purple: "#BF00FF",
          pink: "#FF006E",
          green: "#00FF87",
          yellow: "#FFE500",
        },
        dark: {
          900: "#050508",
          800: "#0A0A12",
          700: "#10101C",
          600: "#16162A",
          500: "#1E1E35",
        },
      },
      boxShadow: {
        brutal: "8px 8px 0px 0px #0D0D0D",
        brutalSm: "4px 4px 0px 0px #0D0D0D",
        brutalYellow: "8px 8px 0px 0px #FFDE00",
        brutalHover: "12px 12px 0px 0px #0D0D0D",
      },
      borderRadius: {
        brutal: "0px",
      },
      animation: {
        shimmer: "shimmer 2.5s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "gradient-x": "gradient-x 4s ease infinite",
        "spin-slow": "spin 8s linear infinite",
        marquee: "marquee 25s linear infinite",
        "bounce-slight": "bounce-slight 2s infinite",
        wiggle: "wiggle 0.5s ease-in-out",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0,245,255,0.3)" },
          "50%": { boxShadow: "0 0 60px rgba(0,245,255,0.8)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "bounce-slight": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
