import * as process from 'process'

import { Configuration } from '@config/Configuration'

export const getBaseConfig = (): Configuration => ({
  hostname: process.env.HOSTNAME || '',
  github: {
    baseApiUrl: process.env.BASE_API_URL,
    endpoints: {
      user: {
        getActivity: (user: string) => `/users/${user}/events`
      }
    }
  }
})