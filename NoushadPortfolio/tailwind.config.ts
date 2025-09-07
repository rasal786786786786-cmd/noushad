import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite alternate",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        drift: "drift 8s ease-in-out infinite",
        helix: "helix 10s linear infinite",
        "gradient-shift": "gradient-shift 3s ease infinite",
        "wave-flow": "wave-flow 15s ease-in-out infinite",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        float: {
          "0%, 100%": { 
            transform: "translateY(0px) rotate(0deg)" 
          },
          "33%": { 
            transform: "translateY(-20px) rotate(1deg)" 
          },
          "66%": { 
            transform: "translateY(-10px) rotate(-1deg)" 
          },
        },
        glow: {
          from: { 
            boxShadow: "0 0 20px hsl(152 81% 56% / 0.3), 0 0 40px hsl(215 84% 56% / 0.2), 0 0 60px hsl(262 83% 56% / 0.1)"
          },
          to: { 
            boxShadow: "0 0 30px hsl(152 81% 56% / 0.6), 0 0 60px hsl(215 84% 56% / 0.4), 0 0 80px hsl(262 83% 56% / 0.3)"
          },
        },
        "pulse-glow": {
          "0%, 100%": { 
            opacity: "0.8", 
            transform: "scale(1)" 
          },
          "50%": { 
            opacity: "1", 
            transform: "scale(1.05)" 
          },
        },
        drift: {
          "0%, 100%": { 
            transform: "translateX(0px) translateY(0px) rotate(0deg)" 
          },
          "25%": { 
            transform: "translateX(30px) translateY(-30px) rotate(90deg)" 
          },
          "50%": { 
            transform: "translateX(0px) translateY(-60px) rotate(180deg)" 
          },
          "75%": { 
            transform: "translateX(-30px) translateY(-30px) rotate(270deg)" 
          },
        },
        helix: {
          "0%": { 
            transform: "rotateY(0deg) rotateX(0deg)" 
          },
          "100%": { 
            transform: "rotateY(360deg) rotateX(360deg)" 
          },
        },
        "gradient-shift": {
          "0%, 100%": { 
            backgroundPosition: "0% 50%" 
          },
          "50%": { 
            backgroundPosition: "100% 50%" 
          },
        },
        "wave-flow": {
          "0%, 100%": { 
            clipPath: "polygon(0 20%, 100% 0%, 100% 80%, 0% 100%)", 
            opacity: "0.3"
          },
          "50%": { 
            clipPath: "polygon(0 40%, 100% 20%, 100% 60%, 0% 80%)", 
            opacity: "0.6"
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
