import { GithubRepository } from '@domain/Github/Repository/GithubRepository'

import { githubRepositorySerialize } from '@presentation/Github/Repository/GithubRepositorySerialize'
import { Result } from '@presentation/Identity/Result'

export class GithubRepositoryListView extends Result {
  constructor(items: GithubRepository[]) {
    super(Result.successMessage)
    this.data = items.map(item => githubRepositorySerialize(item))
  }
}