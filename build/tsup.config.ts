import { defineConfig } from 'tsup';

export default defineConfig(() => ({
  entry: ['src/**/*.ts'],
  splitting: true,
  sourcemap: true,
  clean: true,
  minify: false,
  keepNames: true,
  dts: {
    banner: '/// <reference path="../../types/version2.d.ts" />',
  },
  bundle: true,
  external: [],
  tsconfig: 'tsconfig.json',
  target: 'node20',
  format: ['esm', 'cjs'],
  outDir: 'dist',
}));
