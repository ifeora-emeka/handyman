import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./server.ts'],
  format: ['cjs'],
  target: 'node20',
  outDir: '../dist/server',
  clean: true,
  sourcemap: true,
  splitting: false,
  minify: false,
  shims: true,
  dts: false,
  treeshake: true,
});
