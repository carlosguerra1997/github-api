import { GithubRepository } from '@domain/Github/Repository/GithubRepository'

import { githubRepositorySerialize } from '@presentation/Github/Repository/GithubRepositorySerialize'
import { Result } from '@presentation/Identity/Result'

export class GithubRepositoryReadView extends Result {
  constructor(item: GithubRepository) {
    super(Result.successMessage)
    this.data = githubRepositorySerialize(item)
  }
}