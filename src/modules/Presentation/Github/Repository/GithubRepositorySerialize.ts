import { GithubRepository } from '@modules/Domain/Github/Repository/GithubRepository'

import { githubUserSerialize, GithubUserItemReadView } from '@modules/Presentation/Github/User/GithubUserSerialize'

export type GithubRepositoryItemReadView = {
  id: number
  name: string
  owner: GithubUserItemReadView
  url: string
  isFork: boolean
  mainLanguage: string
  visibility: string
  allowForking: boolean
  forks: number
  hasIssues: boolean
  openIssues: number
  cloneUrl: string
  sshUrl: string
  license: string
  createdAt: string
  updatedAt: string
}

export const githubRepositorySerialize = (item: GithubRepository): GithubRepositoryItemReadView => ({
  id: item.id,
  name: item.name,
  owner: githubUserSerialize(item.owner),
  url: item.url,
  isFork: item.fork,
  mainLanguage: item.mainLanguage,
  visibility: item.visibility,
  allowForking: item.allowForking,
  forks: item.forks,
  hasIssues: item.hasIssues,
  openIssues: item.openIssues,
  cloneUrl: item.cloneUrl,
  sshUrl: item.sshUrl,
  license: item.license,
  createdAt: item.createdAt,
  updatedAt: item.updatedAt
})