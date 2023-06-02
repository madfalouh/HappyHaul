import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import url from '@rollup/plugin-url';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), url({ include: ['**/*.obj'] })],

})
