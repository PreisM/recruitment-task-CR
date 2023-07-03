import { defineConfig } from 'vite'
import type { UserConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import dynamicImport  from 'vite-plugin-dynamic-import'

const vitestConfig: UserConfig = {
  test: {
    globals: true,
    environment: 'jsdom'
  }
}

export default defineConfig({
  test: vitestConfig.test,
  build: {
    sourcemap: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@locales': path.resolve(__dirname, './src/locales'),
      '@api': path.resolve(__dirname, './src/api'),
      '@stores': path.resolve(__dirname, './src/stores'),
      '@quarks': path.resolve(__dirname, './src/components/quarks'),
      '@atoms': path.resolve(__dirname, './src/components/atoms'),
      '@molecules': path.resolve(__dirname, './src/components/molecules'),
      '@organisms': path.resolve(__dirname, './src/components/organisms'),
      '@interfaces': path.resolve(__dirname, './src/interfaces')
    }
  },
  plugins: [
    vue(),
    dynamicImport()
  ],
  define: {
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: false,
    __INTLIFY_PROD_DEVTOOLS__: false
  }
})
