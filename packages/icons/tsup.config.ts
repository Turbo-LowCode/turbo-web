import { defineConfig } from 'tsup'

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
]

export default defineConfig(options => ({
  minify: !options.watch,
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: false,
  clean: true,
  format: ['esm'],
  external: externalPackages,
  dts: true,
}))
