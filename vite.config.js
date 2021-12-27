import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Component from 'unplugin-vue-components/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue(), Component({ include: [/\.vue$/, /\.vue\?vue/, /\.md$/] })],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
});
