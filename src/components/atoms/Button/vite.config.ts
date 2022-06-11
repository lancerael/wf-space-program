import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
	plugins: [
		react()
	],
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: '@wfsp/button',
			fileName: (format) => `wfsp-button.${format}.js`
		}
	}
})