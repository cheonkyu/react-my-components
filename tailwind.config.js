/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // 기존 프로젝트 경로
    './.storybook/**/*.{js,jsx,ts,tsx}', // Storybook 경로 추가
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
