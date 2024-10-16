import { GithubRepository } from '@modules/Domain/Github/Repository/GithubRepository'

import { githubRepositorySerialize } from '@modules/Presentation/Github/Repository/GithubRepositorySerialize'
import { Result } from '@modules/Presentation/Identity/Result'

export class GithubRepositoryListView extends Result {
  constructor(items: GithubRepository[]) {
    super(Result.successMessage)
    this.data = items.map(item => githubRepositorySerialize(item))
  }
}