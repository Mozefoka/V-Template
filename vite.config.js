import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                  @import "@/styles/base/_mixins.scss";
                  @import "@/styles/base/_variables.scss";
                `
            },
        },
    },
})