import { GithubRepository } from '@domain/Github/Repository/GithubRepository'

import { GithubRepositoryData } from '@infrastructure/Services/Github/Rest/Repository/GithubRepositoryResponse'
import { GithubUserAssembler } from '@infrastructure/Persistence/WebService/Github/Assembler/GithubUserAssembler'

export class GithubRepositoryAssembler {
  constructor() {}

  make(repository: GithubRepositoryData): GithubRepository {
    const githubUserAssembler = new GithubUserAssembler()
    const repoOwner = githubUserAssembler.make(repository.owner)

    return new GithubRepository(
      repository.id,
      repository.name,
      repoOwner,
      repository.description,
      repository.html_url,
      repository.fork,
      repository.language,
      repository.visibility,
      repository.allow_forking,
      repository.forks,
      repository.has_issues,
      repository.open_issues,
      repository.clone_url,
      repository.ssh_url,
      repository.license?.name,
      repository.created_at,
      repository.updated_at
    )
  }
}