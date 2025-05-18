/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        md: "448px", // 과제에 언급된 max-w-md (448px)
      },
      colors: {
        // 사주팔자 차트에 필요한 컬러 추가
        "chart-red": "#990000",
        "chart-black": "#000000",
        "chart-blue": "#003366",
        "chart-green": "#006633",
      },
    },
  },
  plugins: [],
};
