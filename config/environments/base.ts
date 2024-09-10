import * as process from 'process'

import { Configuration } from '@config/Configuration'

export const getBaseConfig = (): Configuration => ({
  hostname: process.env.HOSTNAME || '',
  github: {
    baseApiUrl: process.env.BASE_API_URL,
    endpoints: {
      user: {
        getUser: (user: string) => `/users/${user}`,
        getUserFollowers: (user: string) => `/users/${user}/followers`,
        getUserFollowing: (user: string) => `/users/${user}/following`
      },
      repository: {
        getRepository: (owner: string, repo: string) => `/repos/${owner}/${repo}`,
        getUserPublicRepositories: (user: string) => `/users/${user}/repos`
      },
      event: {
        getUserEvents: (user: string) =>  `/users/${user}/events`
      }
    }
  }
})