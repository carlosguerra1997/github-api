import * as process from 'process'

import { Configuration } from '@config/Configuration'
import { getDevConfig } from '@config/environments/dev'

export default () => {
  const { APP_ENV = 'dev' } = process.env

  let currentConfig: Configuration
  switch(APP_ENV) {
    default:
      currentConfig = getDevConfig()
  }

  return currentConfig
}