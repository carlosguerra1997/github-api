import { join } from 'path'

import { defineConfig } from 'vite'
import { defineConfig as defineVitestConfig } from 'vitest/config'

const vitestConfig = defineVitestConfig({
  test: {
    environment: 'node',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html']
    }
  }
})


export default defineConfig({
  resolve: {
    alias: {
      '@config': join(__dirname, 'config'),
      '@common': join(__dirname, 'src/common'),
      '@application': join(__dirname, 'src/Application'),
      '@domain': join(__dirname, 'src/Domain'),
      '@infrastructure': join(__dirname, 'src/Infrastructure'),
      '@presentation': join(__dirname, 'src/Presentation'),
      '@test': join(__dirname, 'test'),
    }
  },
  test: vitestConfig.test
})