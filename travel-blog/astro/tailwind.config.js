/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
      fontFamily: {
        body: '',
      },
      fontSize: {
        sm: '14px',
        base: '16px',
        md: '18px',
        lg: '20px',
        xl: '24px',
        '2xl': '32px',
      },
      colors: {
        foreground: 'hsl(var(--foreground))',
        primary: '#212121',
        secondary: '#30333c',
        accent: '#2980b9',
        muted: '#757575',
        background: '#ffffff',
        date: '#9a9a9a',
        cardBackground: '',
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',

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
    },
  },
  plugins: [],
};
