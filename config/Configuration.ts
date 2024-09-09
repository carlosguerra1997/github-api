export interface Configuration {
  hostname: string
  github: GithubConfig
}

export interface GithubConfig {
  baseApiUrl: string
  endpoints: GithubEndpoints
}

interface GithubEndpoints {
  user: {
    getActivity: (user: string) => string
  }
}