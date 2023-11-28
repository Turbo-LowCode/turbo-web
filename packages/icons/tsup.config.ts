import { defineConfig } from 'tsup'

export default defineConfig(options => ({
  minify: !options.watch,
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: false,
  clean: true,
  format: ['esm'],
  external: [],
  dts: true,
}))
