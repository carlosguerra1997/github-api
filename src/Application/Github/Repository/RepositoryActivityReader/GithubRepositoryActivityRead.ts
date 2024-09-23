import { Inject } from '@nestjs/common'

import { GithubRepositoryActivity } from '@domain/Github/Repository/GithubRepositoryAcitivity'
import { GithubRepositoryRepository } from '@domain/Github/Repository/GithubRepositoryRepository'
import { ListQuery } from '@domain/Identity/List/ListQuery'

import { GithubRepositoryActivityReadQuery } from '@application/Github/Repository/RepositoryActivityReader/GithubRepositoryActivityReadQuery'

export class GithubRepositoryActivityRead {
  private mapping: Record<string, string> = {
    username: 'actor'
  }

  constructor (
    @Inject(GithubRepositoryRepository) private githubRepoRepo: GithubRepositoryRepository
  ) {}

  async dispatch(owner: string, repo: string, query: GithubRepositoryActivityReadQuery): Promise<GithubRepositoryActivity[]> {
    const listQuery = ListQuery.parse(query, this.mapping)
    return await this.githubRepoRepo.searchRepositoryActivity(owner, repo, listQuery)
  }
}