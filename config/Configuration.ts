export interface Configuration {
  hostname: string
  github: GithubConfig
}

export interface GithubConfig {
  baseUrl: string
  baseApiUrl: string
  endpoints: GithubEndpoints
}

interface GithubEndpoints {
  user: {
    getUser: (user: string) => string
    getUserFollowers: (user: string) => string
    getUserFollowing: (user: string) => string
  },
  repository: {
    getRepository: (owner: string, repo: string) => string
    getRepositoryActivity: (owner: string, repo: string) => string
    getUserPublicRepositories: (user: string) => string
  }
  event: {
    getUserEvents: (user: string) => string
  }
}