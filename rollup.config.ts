import { defineConfig } from 'rollup'
// import clear from 'rollup-plugin-clear'
import ts from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import dts from 'rollup-plugin-dts'
import fs from 'fs'

const pkg = JSON.parse(fs.readFileSync('./package.json', { encoding: 'utf8' }))

const config = [
  defineConfig({
    input: 'src/index.ts',
    output: {
      name: 'colorsea',
      file: pkg.main,
      format: 'umd'
    },
    plugins: [
      ts({
        clean: true
      }),
      terser()
    ]
  }),
  defineConfig({
    input: 'src/index.ts',
    output: {
      file: pkg.types,
      format: 'es'
    },
    plugins: [dts()]
  })
]

export default config
