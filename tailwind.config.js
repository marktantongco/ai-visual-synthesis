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
        // ============================================
        // ULTRA-MODERN BRUTALIST YELLOW CREAM SCHEME
        // ============================================
        brutal: {
          // Primary Yellow Palette
          yellow: "#FFDE00",
          yellowLight: "#FFF4A3",
          yellowDark: "#E6C700",
          yellowMuted: "#D4B800",
          yellowGlow: "#FFEE66",
          
          // Cream/Warm White Palette
          cream: "#F5F5F0",
          creamLight: "#FAFAF5",
          creamDark: "#EBEBE0",
          creamWarm: "#F8F6EE",
          
          // Black Palette
          black: "#0D0D0D",
          blackLight: "#1A1A1A",
          blackMuted: "#2A2A2A",
          blackSoft: "#333333",
          
          // Accent Colors
          red: "#FF006E",
          redLight: "#FF3366",
          redDark: "#CC0058",
          
          cyan: "#00F5FF",
          cyanLight: "#66FAFF",
          cyanDark: "#00C4CC",
          
          purple: "#BF00FF",
          purpleLight: "#D066FF",
          purpleDark: "#9900CC",
          
          green: "#00FF87",
          greenLight: "#66FFB3",
          greenDark: "#00CC6B",
          
          // Gray Scale
          gray: "#666666",
          grayLight: "#999999",
          grayDark: "#333333",
          grayMuted: "#888888",
          
          // Utility
          white: "#FAFAFA",
          accent: "#FF3366",
          accentBlue: "#0066FF",
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
        // ============================================
        // BRUTALIST HARD SHADOWS
        // ============================================
        brutal: "8px 8px 0px 0px #0D0D0D",
        brutalSm: "4px 4px 0px 0px #0D0D0D",
        brutalLg: "12px 12px 0px 0px #0D0D0D",
        brutalXl: "16px 16px 0px 0px #0D0D0D",
        brutalYellow: "8px 8px 0px 0px #FFDE00",
        brutalYellowSm: "4px 4px 0px 0px #FFDE00",
        brutalYellowLg: "12px 12px 0px 0px #FFDE00",
        brutalRed: "8px 8px 0px 0px #FF006E",
        brutalRedSm: "4px 4px 0px 0px #FF006E",
        brutalCyan: "8px 8px 0px 0px #00F5FF",
        
        // Hover states
        brutalHover: "12px 12px 0px 0px #0D0D0D",
        brutalYellowHover: "12px 12px 0px 0px #FFDE00",
        
        // Inset shadows
        brutalInset: "inset 4px 4px 0px 0px #0D0D0D",
        brutalYellowInset: "inset 4px 4px 0px 0px #FFDE00",
        
        // Glow effects
        glowYellow: "0 0 20px rgba(255, 222, 0, 0.5), 0 0 40px rgba(255, 222, 0, 0.2)",
        glowCyan: "0 0 20px rgba(0, 245, 255, 0.5), 0 0 40px rgba(0, 245, 255, 0.2)",
        glowRed: "0 0 20px rgba(255, 0, 110, 0.5), 0 0 40px rgba(255, 0, 110, 0.2)",
      },
      borderRadius: {
        brutal: "0px",
        brutalSm: "2px",
      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
        '6': '6px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
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
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "skew-subtle": "skew-subtle 3s ease-in-out infinite",
        "border-dance": "border-dance 0.5s ease-in-out infinite",
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
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255, 222, 0, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(255, 222, 0, 0.8)" },
        },
        "skew-subtle": {
          "0%, 100%": { transform: "skewX(0deg)" },
          "25%": { transform: "skewX(-0.5deg)" },
          "75%": { transform: "skewX(0.5deg)" },
        },
        "border-dance": {
          "0%, 100%": { borderColor: "#FFDE00" },
          "50%": { borderColor: "#00F5FF" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      // Typography scale for brutalist design
      fontSize: {
        'display': ['clamp(4rem, 12vw, 10rem)', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        'hero': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'headline': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'title': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
    },
  },
  plugins: [],
};
