/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dmaTheme: {
          "primary": "#1e3a5f",        // Navy Blue (from school uniforms)
          "secondary": "#fbbf24",      // Golden Yellow (from uniform collars)
          "accent": "#3b82f6",         // Cheerful Blue
          "neutral": "#f3f4f6",        // Soft Gray
          "base-100": "#ffffff",       // White
          "base-200": "#fffbeb",       // Warm Off-White
          "base-300": "#fef3c7",       // Light Cream
          "info": "#0ea5e9",          // Info Blue
          "success": "#10b981",        // Green
          "warning": "#f59e0b",        // Amber/Orange
          "error": "#ef4444",          // Red

          // Additional semantic colors
          "base-content": "#1e3a5f",   // Navy (for text on base backgrounds)
          "primary-content": "#ffffff", // White text on primary
          "secondary-content": "#1e3a5f", // Navy text on secondary
        },
      },
    ],
  },
}
