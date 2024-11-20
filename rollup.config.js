import serve from 'rollup-plugin-serve';  // Importa el plugin

import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import css from 'rollup-plugin-css-only';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js'
  },
  plugins: [
    svelte({
      compilerOptions: {
        dev: !production
      }
    }),
    css({ output: 'bundle.css' }),
    resolve({
      browser: true,
      dedupe: ['svelte'],
      exportConditions: ['svelte']
    }),
    commonjs(),

    // Configuración del plugin serve directamente
    !production && serve({
      open: true, // Abre el navegador automáticamente
      contentBase: ['public'], // Sirve la carpeta public
      host: '0.0.0.0',  // Esto permite que se acceda desde otros dispositivos
      port: 5000, // Puerto de tu servidor (puedes configurarlo como desees)
      headers: {
        'Access-Control-Allow-Origin': '*' // Permite solicitudes desde cualquier origen
      },
    }),

    // Solo activar livereload en desarrollo
    !production && livereload('public'),

    // Minificar si es producción
    production && terser()
  ],
  watch: {
    clearScreen: false
  }
};
