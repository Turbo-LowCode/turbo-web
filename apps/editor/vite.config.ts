import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

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
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'turbo.core',
      fileName: format => `index.${format}.js`,
    },
    rollupOptions: {
      // 排除 React 和 React DOM，因为这些库应该由使用你的库的项目来提供
      external: externalPackages,
      output: {
        // 配置 UMD 格式，使你的组件库可以在不同的环境中使用
        globals: {
          react: 'React',
          'react-dom': 'ReactDom',
        },
        // 配置 minify 选项，使输出文件更小
        minifyInternalExports: true,
      },
    },
  },
})
