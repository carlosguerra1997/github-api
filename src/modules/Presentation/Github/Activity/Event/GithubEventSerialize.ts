import { EventTypes } from '@modules/Domain/Github/Event/Types/EventTypes'
import { GithubEvent } from '@modules/Domain/Github/Event/GithubEvent'
import { GithubRepository } from '@modules/Domain/Github/Repository/GithubRepository'
import { GithubUser } from '@modules/Domain/Github/User/GithubUser'

export type GithubEventItemReadView = {
  id: string
  type: string
  author: Pick<GithubUser, 'username' | 'avatar'>
  repository: Pick<GithubRepository, 'name' | 'url'>
  createdAt: string
}

export const githubEventSerialize = (item: GithubEvent<EventTypes>): GithubEventItemReadView => {
  const GITHUB_URL = 'https://github.com'
  const repositoryUrl = `${GITHUB_URL}/${item.repository.name}`

  return {
    id: item.id,
    type: item.type,
    author: {
      username: item.user.username,
      avatar: item.user.avatar
    },
    repository: {
      name: item.repository.name,
      url: repositoryUrl
    },
    createdAt: item.createdAt
  }
}