import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env' : {
      REACT_APP_GOOGLE_API_KEY:'AIzaSyAEX604gxS75SlYPru4UB--iJoFeo_XE3s'
    }
  }
})
