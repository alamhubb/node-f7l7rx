import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import md from '@socialuni/vite-plugin-md'
import vitePluginRequire from "./vite-plugin-require/index"
// import vitePluginRequire from "vite-plugin-require"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), md(), vitePluginRequire()],
    // plugins: [vue(), md(), vitePluginRequire.default()],
    server: {
        host: "0.0.0.0"
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
