import { Inject, Injectable } from '@nestjs/common'

import { GithubEvent } from '@domain/Github/Event/GithubEvent'
import { GithubEventRepository } from '@domain/Github/Event/GithubEventRepository'

@Injectable()
export class GithubActivityRead {
  constructor(
    @Inject(GithubEventRepository) private repoGithub: GithubEventRepository
  ) {}

  async dispatch(user: string): Promise<GithubEvent[]> {
    return this.repoGithub.searchActivityByUser(user)
  }
}