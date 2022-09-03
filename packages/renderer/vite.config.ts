import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join } from 'path'
import { builtinModules } from 'module'

export default defineConfig({
  plugins: [react()],
  root: __dirname,
  base: './',
  build: {
    sourcemap: true,
    emptyOutDir: true,
    // Output to dist/renderer in project root
    outDir: '../../dist/renderer',
    rollupOptions: {
      input: join(__dirname, 'index.html'),
      // Exclude node internal modules from build output.
      external: [...builtinModules.flatMap((p) => [p, `node:${p}`])],
    }
  }
})
