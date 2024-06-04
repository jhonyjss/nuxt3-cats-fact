import { defineVitestConfig } from '@nuxt/test-utils/config'
import { loadEnv } from 'vite'

export default defineVitestConfig({
    test: {
        environment: 'nuxt',
        env: loadEnv('', process.cwd(), ''),

    }
})