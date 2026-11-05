
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./contact.html",
    "./src/**/*.{html,js}",
  ],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: "#123D32",
          dark: "#092820",
          deep: "#061D18",
          light: "#1E5949",
          soft: "#E5EFE9",
        },

        cream: {
          DEFAULT: "#F6F0E6",
          light: "#FBF8F2",
          dark: "#E9DDCC",
        },

        gold: {
          DEFAULT: "#C6A46A",
          light: "#E5C995",
          dark: "#997442",
        },

        ink: "#252B26",
        muted: "#85877F",
      },

      fontFamily: {
        sans: ["Vazirmatn", "sans-serif"],
        display: ["Cormorant Garamond", "serif"],
      },

      boxShadow: {
        luxury: "0 20px 60px rgba(9, 40, 32, 0.12)",
        card: "0 12px 35px rgba(30, 40, 30, 0.08)",
        gold: "0 8px 25px rgba(198, 164, 106, 0.25)",
      },

      borderRadius: {
        arch: "180px 180px 12px 12px",
        "arch-sm": "100px 100px 8px 8px",
      },

      backgroundImage: {
        "emerald-gradient":
          "linear-gradient(135deg, #092820 0%, #123D32 55%, #1E5949 100%)",

        "cream-gradient":
          "linear-gradient(135deg, #FBF8F2 0%, #F0E6D7 100%)",

        "gold-gradient":
          "linear-gradient(135deg, #E5C995 0%, #B58B4D 100%)",
      },

      keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-12px)",
          },
        },

        shimmer: {
          "0%": {
            backgroundPosition: "-200% center",
          },
          "100%": {
            backgroundPosition: "200% center",
          },
        },

        scaleIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.92)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },

      animation: {
        "fade-up": "fadeUp 0.8s ease-out both",
        float: "float 4s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "scale-in": "scaleIn 0.6s ease-out both",
      },
    },
  },

  plugins: [],
};
