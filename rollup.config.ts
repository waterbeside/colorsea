import { defineConfig } from 'rollup'
import ts from 'rollup-plugin-typescript2'
import terser from '@rollup/plugin-terser'
import dts from 'rollup-plugin-dts'
import copy from 'rollup-plugin-copy'
import fs from 'fs'
import path from 'path'

const pkg = JSON.parse(fs.readFileSync('./package.json', { encoding: 'utf8' }))
const input = 'src/index.ts'

const config = [
  defineConfig({
    input,
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
    input,
    output: {
      file: pkg.module,
      format: 'es'
    },
    plugins: [
      ts(),
      terser(),
      copy({
        targets: [
          {src: 'typings/index.d.ts', dest: 'dist'}
        ]
      })
    ]
  }),
  // defineConfig({
  //   input,
  //   output: {
  //     file: pkg.types,
  //     format: 'es'
  //   },
  //   plugins: [dts()]
  // })
]

// rollup color names
const rollColorNames = () => {
  const dirPath = path.join(path.resolve('./src'), 'colors')
  const outputDir = path.resolve('./colors')
  const dirNames = fs.readdirSync(dirPath)
  for (const dirName of dirNames) {
    const input = path.join(dirPath, dirName)
    const fileName = /\.(js|ts)$/.test(dirName) ? dirName.slice(0, -3) : dirName
    const stat = fs.statSync(input)
    if (!stat.isDirectory()) {
      config.push(
        defineConfig({
          input,
          output: {
            name: fileName,
            file: path.join(outputDir, `${fileName}.js`),
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
          input,
          output: {
            file: path.join(outputDir, `${fileName}.d.ts`),
            format: 'es'
          },
          plugins: [dts()]
        })
      )
    }
  }
}

rollColorNames()
export default config
