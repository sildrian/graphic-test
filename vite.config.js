import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // plugins: [
  //   {
  //     name: 'treat-js-files-as-jsx',
  //     async transform ( code, id ) {
  //       if ( !id.match( /src\/.*\.js$/ ) ) return null;
  //       // include ts or tsx for TypeScript support 
  //       // Use the exposed transform from vite, instead of directly
  //       // transforming with esbuild
  //       return transformWithEsbuild( code, id, {
  //         loader: 'jsx',
  //         jsx: 'automatic',
  //       } );
  //     },
  //   },
  //   react(),
  // ],
  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  server: {
    port: 3000,
  },
})
