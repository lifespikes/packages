const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
    '../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        brand: {
          purple: {
            50: 'var(--brand-purple-50)',
            100: 'var(--brand-purple-100)',
            200: 'var(--brand-purple-200)',
            300: 'var(--brand-purple-300)',
            400: 'var(--brand-purple-400)',
            500: 'var(--brand-purple-500)',
            600: 'var(--brand-purple-600)',
            700: 'var(--brand-purple-700)',
            800: 'var(--brand-purple-800)',
            900: 'var(--brand-purple-900)',
          },
          orange: {
            50: 'var(--brand-orange-50)',
            100: 'var(--brand-orange-100)',
            200: 'var(--brand-orange-200)',
            300: 'var(--brand-orange-300)',
            400: 'var(--brand-orange-400)',
            500: 'var(--brand-orange-500)',
            600: 'var(--brand-orange-600)',
            700: 'var(--brand-orange-700)',
            800: 'var(--brand-orange-800)',
            900: 'var(--brand-orange-900)',
          },
          yellow: {
            50: 'var(--brand-yellow-50)',
            100: 'var(--brand-yellow-100)',
            200: 'var(--brand-yellow-200)',
            300: 'var(--brand-yellow-300)',
            400: 'var(--brand-yellow-400)',
            500: 'var(--brand-yellow-500)',
            600: 'var(--brand-yellow-600)',
            700: 'var(--brand-yellow-700)',
            800: 'var(--brand-yellow-800)',
            900: 'var(--brand-yellow-900)',
          },
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        info: {
          DEFAULT: 'hsl(var(--info))',
          foreground: 'hsl(var(--info-foreground))',
        },
        error: {
          DEFAULT: 'hsl(var(--error))',
          foreground: 'hsl(var(--error-foreground))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
