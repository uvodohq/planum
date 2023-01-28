import type { Options } from 'tsup'
import { defineConfig } from 'tsup'

export default defineConfig((options: Options) => {
  const isProd = !options.watch

  const formats: Options['format'] = ['esm']

  if (isProd) {
    formats.push('cjs')
  }

  return {
    entry: ['src/index.tsx'],
    minify: isProd,
    format: formats,
    dts: true,
    external: ['react', '@uvodohq/planum', 'framer-motion'],
    metafile: isProd,
  }
})
