import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

const externalPackages = [
  '@craftjs/core',
  'react',
  'react-dom',
  'antd',
  '@ant-design/icons',
  '@emotion/css',
  'redux',
  '@reduxjs/toolkit',
  'react-redux',
  'ahooks',
]

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
