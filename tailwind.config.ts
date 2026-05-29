import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ---- Theme-aware semantic tokens (mapped to CSS vars) ----
        background: "rgb(var(--background) / <alpha-value>)",
        "on-background": "rgb(var(--on-surface) / <alpha-value>)",

        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-dim": "rgb(var(--background) / <alpha-value>)",
        "surface-bright": "rgb(var(--surface-3) / <alpha-value>)",
        "surface-variant": "rgb(var(--surface-2) / <alpha-value>)",
        "surface-container-lowest": "rgb(var(--background) / <alpha-value>)",
        "surface-container-low": "rgb(var(--surface) / <alpha-value>)",
        "surface-container": "rgb(var(--surface-2) / <alpha-value>)",
        "surface-container-high": "rgb(var(--surface-2) / <alpha-value>)",
        "surface-container-highest": "rgb(var(--surface-3) / <alpha-value>)",

        "on-surface": "rgb(var(--on-surface) / <alpha-value>)",
        "on-surface-variant": "rgb(var(--on-surface-variant) / <alpha-value>)",
        "inverse-surface": "rgb(var(--on-surface) / <alpha-value>)",
        "inverse-on-surface": "rgb(var(--surface) / <alpha-value>)",

        // primary == main ink text (so existing text-primary stays legible in both themes)
        primary: "rgb(var(--ink) / <alpha-value>)",
        tertiary: "rgb(var(--ink) / <alpha-value>)",
        "tertiary-fixed": "rgb(var(--ink) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        "secondary-fixed": "rgb(var(--secondary) / <alpha-value>)",
        "secondary-fixed-dim": "rgb(var(--muted) / <alpha-value>)",
        "tertiary-fixed-dim": "rgb(var(--muted) / <alpha-value>)",

        // accent family (cyan) — readable in both themes
        "primary-fixed": "rgb(var(--accent) / <alpha-value>)",
        "primary-fixed-dim": "rgb(var(--accent-strong) / <alpha-value>)",
        "primary-container": "rgb(var(--accent) / <alpha-value>)",
        "surface-tint": "rgb(var(--accent-strong) / <alpha-value>)",
        "inverse-primary": "rgb(var(--accent-strong) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",

        // text/ink that sits ON the accent fill
        "on-primary": "rgb(var(--accent-contrast) / <alpha-value>)",
        "on-primary-fixed": "rgb(var(--accent-contrast) / <alpha-value>)",
        "on-primary-container": "rgb(var(--accent-contrast) / <alpha-value>)",
        "on-primary-fixed-variant": "rgb(var(--accent-strong) / <alpha-value>)",

        // outlines / borders
        outline: "rgb(var(--muted) / <alpha-value>)",
        "outline-variant": "rgb(var(--border) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",

        // misc semantic (kept for existing usage)
        "on-secondary": "rgb(var(--surface) / <alpha-value>)",
        "on-secondary-container": "rgb(var(--on-surface-variant) / <alpha-value>)",
        "secondary-container": "rgb(var(--surface-2) / <alpha-value>)",
        "tertiary-container": "rgb(var(--surface-2) / <alpha-value>)",
        "on-tertiary-container": "rgb(var(--muted) / <alpha-value>)",
        "on-tertiary": "rgb(var(--on-surface) / <alpha-value>)",

        // status (theme-neutral)
        error: "#ff5a5a",
        "on-error": "#690005",
        "error-container": "#93000a",
        "on-error-container": "#ffdad6",
        success: "#34d399",
        warning: "#f5c451",
      },
      borderColor: {
        DEFAULT: "rgb(var(--border) / var(--border-alpha))",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      spacing: {
        "stack-sm": "8px",
        "stack-lg": "32px",
        "stack-xl": "64px",
        "stack-md": "16px",
        "margin-desktop": "40px",
        "margin-mobile": "20px",
        gutter: "16px",
        base: "8px",
      },
      fontFamily: {
        "label-sm": ["var(--font-inter)", "Inter", "sans-serif"],
        "body-md": ["var(--font-inter)", "Inter", "sans-serif"],
        "label-md": ["var(--font-inter)", "Inter", "sans-serif"],
        "headline-lg-mobile": ["var(--font-hanken)", "Hanken Grotesk", "sans-serif"],
        "display-md": ["var(--font-hanken)", "Hanken Grotesk", "sans-serif"],
        "display-lg": ["var(--font-hanken)", "Hanken Grotesk", "sans-serif"],
        "headline-lg": ["var(--font-hanken)", "Hanken Grotesk", "sans-serif"],
        "body-lg": ["var(--font-inter)", "Inter", "sans-serif"],
      },
      fontSize: {
        "label-sm": ["12px", { lineHeight: "1.1", letterSpacing: "0.03em", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "1.5", fontWeight: "400" }],
        "label-md": ["14px", { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "500" }],
        "headline-lg-mobile": ["20px", { lineHeight: "1.3", fontWeight: "600" }],
        "display-md": ["32px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "display-lg": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
      },
      maxWidth: {
        "7xl": "80rem",
      },
    },
  },
  plugins: [],
};

export default config;
