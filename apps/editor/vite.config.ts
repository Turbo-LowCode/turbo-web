import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

const externalPackages = [
  '@ant-design/icons',
  '@ant-design/pro-components',
  '@craftjs/core',
  '@reduxjs/toolkit',
  'ahooks',
  'antd',
  'antd-style',
  'immer',
  'lodash',
  'monaco-editor',
  'react',
  'react-dom',
  'react-monaco-editor',
  'react-redux',
  'zustand',
  'i18next',
  'react-i18next',
]

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 8080,
  },
})
