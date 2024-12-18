import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base:  "/HMD-Medical-Website/",
  plugins: [react()],

})
