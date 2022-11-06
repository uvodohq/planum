import type { Options } from 'tsup'
import { defineConfig } from 'tsup'

export default defineConfig((options: Options) => {
  const isDev = !!options.watch

  const formats: Options['format'] = ['esm']

  if (!isDev) {
    formats.push('cjs')
  }

  return {
    entry: ['src/index.tsx'],
    minify: !isDev,
    format: formats,
    dts: true,
    external: ['react'],
  }
})
