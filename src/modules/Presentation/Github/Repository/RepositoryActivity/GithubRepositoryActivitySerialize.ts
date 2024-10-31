import { GithubRepositoryActivity } from '@modules/Domain/Github/Repository/GithubRepositoryAcitivity'

import { GithubUserItemReadView } from '@modules/Presentation/Github/User/GithubUserSerialize'
import { githubUserSerialize } from '@modules/Presentation/Github/User/GithubUserSerialize'

export interface GihubRepositoryActivityListView {
  id: number
  branch: string
  commitHash: string
  commitUrl: string
  timestamp: string
  type: string
  author: GithubUserItemReadView
}

export const githubRepositoryActivitySerialize = (item: GithubRepositoryActivity): GihubRepositoryActivityListView => ({
  id: item.id,
  branch: item.branch.split('/').pop(),
  commitHash: item.commitId,
  commitUrl: item.commitUrl,
  timestamp: item.timestamp,
  type: item.type,
  author: githubUserSerialize(item.author)
})