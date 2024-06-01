import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    resolve: { //we added this
      alias: { 
        '@lib': resolve('src/main/lib'),
        '@shared': resolve('src/shared'),
      }
    } //yaha tak
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    assetsInclude: 'src/renderer/assets/**', // we added this, to include all the assests from the location we gave 
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@shared': resolve('src/shared'), // we added this 
        '@/hooks': resolve('src/renderer/src/hooks'),
        '@/assets': resolve('src/renderer/src/assets'),
        '@/store': resolve('src/renderer/src/store'),
        '@/components': resolve('src/renderer/src/components'),
        '@/mocks': resolve('src/renderer/src/mocks') //yaha tak add kiya 
      }
    },
    plugins: [react()]
  }
})
