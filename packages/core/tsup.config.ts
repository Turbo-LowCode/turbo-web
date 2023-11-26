import { defineConfig } from 'tsup'

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
  'zustand',
  'lodash',
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
