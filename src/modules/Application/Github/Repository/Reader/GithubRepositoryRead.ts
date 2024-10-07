import { Inject } from '@nestjs/common'

import { GithubRepository } from '@modules/Domain/Github/Repository/GithubRepository'
import { GithubRepositoryRepository } from '@modules/Domain/Github/Repository/GithubRepositoryRepository'

export class GithubRepositoryRead {
  constructor(
    @Inject(GithubRepositoryRepository) private githubRepoRepo: GithubRepositoryRepository
  ) {}

  async dispatch(owner: string, repo: string): Promise<GithubRepository> {
    return await this.githubRepoRepo.searchRepository(owner, repo)
  }
}