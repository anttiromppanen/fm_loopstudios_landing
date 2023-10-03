/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: "0.9375rem",
      },
      fontFamily: {
        sans: ["Alata", "sans-serif"],
        josefinSans: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        userDarkGray: "hsl(0, 0%, 55%)",
        userVeryDarkGray: "hsl(0, 0%, 41%)",
      },
      backgroundImage: {
        userHeroBgImgMobileBg: "url('/mobile/image-hero.jpg')",
        userHeroBgImgDesktopBg: "url('/desktop/image-hero.jpg')",

        userCreations1MobileBg: "url('/mobile/image-deep-earth.jpg')",
        userCreations1DesktopBg: "url('/desktop/image-deep-earth.jpg')",

        userCreations2MobileBg: "url('/mobile/image-night-arcade.jpg')",
        userCreations2DesktopBg: "url('/desktop/image-night-arcade.jpg')",

        userCreations3MobileBg: "url('/mobile/image-soccer-team.jpg')",
        userCreations3DesktopBg: "url('/desktop/image-soccer-team.jpg')",

        userCreations4MobileBg: "url('/mobile/image-grid.jpg')",
        userCreations4DesktopBg: "url('/desktop/image-grid.jpg')",

        userCreations5MobileBg: "url('/mobile/image-from-above.jpg')",
        userCreations5DesktopBg: "url('/desktop/image-from-above.jpg')",

        userCreations6MobileBg: "url('/mobile/image-pocket-borealis.jpg')",
        userCreations6DesktopBg: "url('/desktop/image-pocket-borealis.jpg')",

        userCreations7MobileBg: "url('/mobile/image-curiosity.jpg')",
        userCreations7DesktopBg: "url('/desktop/image-curiosity.jpg')",

        userCreations8MobileBg: "url('/mobile/image-fisheye.jpg')",
        userCreations8DesktopBg: "url('/desktop/image-fisheye.jpg')",
      }
    },
  },
  plugins: [],
}