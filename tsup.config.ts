/**
 * @ref(tsup) https://tsup.egoist.dev/
 *
 */
import { defineConfig, type Options } from 'tsup'

export const config: Options = {
  clean: false,
  dts: true,
  external: [],
  format: ['esm', 'cjs'],
  minify: true,
  noExternal: [],
  onSuccess: 'pnpm run copy',
  outDir: 'dist',
  silent: true,
  sourcemap: false,
  splitting: false,
  treeshake: false,
  target: ['node16'],
}

export default defineConfig(config)
