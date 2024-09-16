import { GithubUserData } from '@infrastructure/Services/Github/Rest/User/GithubUserResponse'

export type GithubActivityData = {
  id: string
  type: string
  actor: GithubUserData
  repo: GithubRepoResponse
  payload: GithubPayloadResponse
  public: boolean
  created_at: string
}

export type GithubRepoResponse = {
  id: number
  name: string
  url: string
}

export type GithubPayloadResponse = {
  repository_id: number
  push_id: number
  size: number
  distinct_size: number
  ref: string
  head: string
  before: string
  commits?: GithubCommitPayload[]
}

export type GithubCommitPayload = {
  sha: string
  author: GithubCommitAuthorPayload
  message: string
  distinct: boolean
  url: string
}

export type GithubCommitAuthorPayload = {
  name: string
  email: string
}