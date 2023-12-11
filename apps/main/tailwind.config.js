/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false, // 与 antd 样式冲突
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
