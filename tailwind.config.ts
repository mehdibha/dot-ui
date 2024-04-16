import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}", "./content/**/*.{ts,tsx,mdx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        // old (shadcn)
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // new (extended rcopy)
        bg: {
          DEFAULT: "hsl(var(--color-bg))",
          inverse: "hsl(var(--color-bg-inverse))",
          surface: "hsl(var(--color-bg-surface))",
          disabled: "hsl(var(--color-bg-disabled))",
          neutral: {
            DEFAULT: "hsl(var(--color-bg-neutral))",
            hover: "hsl(var(--color-bg-neutral-hover))",
            active: "hsl(var(--color-bg-neutral-active))",
          },
          primary: {
            DEFAULT: "hsl(var(--color-bg-primary))",
            hover: "hsl(var(--color-bg-primary-hover))",
            active: "hsl(var(--color-bg-primary-active))",
          },
          success: {
            DEFAULT: "hsl(var(--color-bg-success))",
            hover: "hsl(var(--color-bg-success-hover))",
            active: "hsl(var(--color-bg-success-active))",
            muted: {
              DEFAULT: "hsl(var(--color-bg-success-muted))",
              hover: "hsl(var(--color-bg-success-muted-hover))",
              active: "hsl(var(--color-bg-success-muted-active))",
            },
          },
          danger: {
            DEFAULT: "hsl(var(--color-bg-danger))",
            hover: "hsl(var(--color-bg-danger-hover))",
            active: "hsl(var(--color-bg-danger-active))",
            muted: {
              DEFAULT: "hsl(var(--color-bg-danger-muted))",
              hover: "hsl(var(--color-bg-danger-muted-hover))",
              active: "hsl(var(--color-bg-danger-muted-active))",
            },
          },
          warning: {
            DEFAULT: "hsl(var(--color-bg-warning))",
            hover: "hsl(var(--color-bg-warning-hover))",
            active: "hsl(var(--color-bg-warning-active))",
            muted: {
              DEFAULT: "hsl(var(--color-bg-warning-muted))",
              hover: "hsl(var(--color-bg-warning-muted-hover))",
              active: "hsl(var(--color-bg-warning-muted-active))",
            },
          },
          info: {
            DEFAULT: "hsl(var(--color-bg-info))",
            hover: "hsl(var(--color-bg-info-hover))",
            active: "hsl(var(--color-bg-info-active))",
            muted: {
              DEFAULT: "hsl(var(--color-bg-info-muted))",
              hover: "hsl(var(--color-bg-info-muted-hover))",
              active: "hsl(var(--color-bg-info-muted-active))",
            },
          },
        },
        fg: {
          DEFAULT: "hsl(var(--color-fg))",
          secondary: "hsl(var(--color-fg-secondary))",
          inverse: "hsl(var(--color-fg-inverse))",
          disabled: "hsl(var(--color-fg-disabled))",
          link: {
            DEFAULT: "hsl(var(--color-fg-link))",
            hover: "hsl(var(--color-fg-link-hover))",
            active: "hsl(var(--color-fg-link-active))",
            visited: "hsl(var(--color-fg-link-visited))",
          },
          onNeutral: "hsl(var(--color-fg-onNeutral))",
          onPrimary: "hsl(var(--color-fg-onPrimary))",
          onSuccess: "hsl(var(--color-fg-onSuccess))",
          onMutedSuccess: "hsl(var(--color-fg-onMutedSuccess))",
          onDanger: "hsl(var(--color-fg-onDanger))",
          onMutedDanger: "hsl(var(--color-fg-onMutedDanger))",
          onWarning: "hsl(var(--color-fg-onWarning))",
          onMutedWarning: "hsl(var(--color-fg-onMutedWarning))",
        },
        border: {
          DEFAULT: "hsl(var(--color-border))",
          hover: "hsl(var(--color-border-hover))",
          active: "hsl(var(--color-border-active))",
          disabled: "hsl(var(--color-border-disabled))",
          secondary: "hsl(var(--color-border-secondary))",
          focus: "hsl(var(--color-border-focus))",
          inverse: "hsl(var(--color-border-inverse))",
        },
      },
      transitionDuration: {
        "3000": "3000ms",
      },
      backgroundImage: {
        gradient: "linear-gradient(10deg, rgb(81, 112, 255), rgb(255, 102, 196))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
        display: ["var(--font-display)", ...fontFamily.sans],
      },
      transitionDelay: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
        "900": "900ms",
        "1200": "1200ms",
      },
      gridTemplateColumns: {
        "16": "repeat(16, minmax(0, 1fr))",
        "18": "repeat(18, minmax(0, 1fr))",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "collapsible-down": {
          from: { height: "0" },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: "0" },
        },
        "gradient-foreground-1": {
          "from, 16.667%, to": {
            opacity: "1",
          },
          "33.333%, 83.333%": {
            opacity: "0",
          },
        },
        "gradient-background-1": {
          "from, 16.667%, to": {
            opacity: "0",
          },
          "25%, 91.667%": {
            opacity: "1",
          },
        },
        "gradient-foreground-2": {
          "from, to": {
            opacity: "0",
          },
          "33.333%, 50%": {
            opacity: "1",
          },
          "16.667%, 66.667%": {
            opacity: "0",
          },
        },
        "gradient-background-2": {
          "from, to": {
            opacity: "1",
          },
          "33.333%, 50%": {
            opacity: "0",
          },
          "25%, 58.333%": {
            opacity: "1",
          },
        },
        "gradient-foreground-3": {
          "from, 50%, to": {
            opacity: "0",
          },
          "66.667%, 83.333%": {
            opacity: "1",
          },
        },
        "gradient-background-3": {
          "from, 58.333%, 91.667%, to": {
            opacity: "1",
          },
          "66.667%, 83.333%": {
            opacity: "0",
          },
        },
        flip: {
          to: {
            transform: "rotate(360deg)",
          },
        },
        rotate: {
          to: {
            transform: "rotate(90deg)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-out",
        "collapsible-up": "collapsible-up 0.2s ease-out",
        "gradient-background-1": "gradient-background-1 8s infinite",
        "gradient-foreground-1": "gradient-foreground-1 8s infinite",
        "gradient-background-2": "gradient-background-2 8s infinite",
        "gradient-foreground-2": "gradient-foreground-2 8s infinite",
        "gradient-background-3": "gradient-background-3 8s infinite",
        "gradient-foreground-3": "gradient-foreground-3 8s infinite",
        flip: "flip 6s infinite steps(2, end)",
        rotate: "rotate 3s linear infinite both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
