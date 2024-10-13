import { GithubRepository } from '@modules/Domain/Github/Repository/GithubRepository'

import { githubRepositorySerialize } from '@modules/Presentation/Github/Repository/GithubRepositorySerialize'
import { Result } from '@modules/Presentation/Identity/Result'

export class GithubRepositoryReadView extends Result {
  constructor(item: GithubRepository) {
    super(Result.successMessage)
    this.data = githubRepositorySerialize(item)
  }
}