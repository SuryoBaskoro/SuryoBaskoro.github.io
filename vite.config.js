import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// base './' = semua alamat file relatif, jadi website jalan di
// https://username.github.io/ maupun https://username.github.io/nama-repo/
export default defineConfig({
  plugins: [vue()],
  base: './',
})
