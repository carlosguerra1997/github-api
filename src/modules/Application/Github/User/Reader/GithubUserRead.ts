import { Inject, Injectable } from '@nestjs/common'

import { GithubUser } from '@modules/Domain/Github/User/GithubUser'
import { GithubUserRepository } from '@modules/Domain/Github/User/GithubUserRepository'

@Injectable()
export class GithubUserRead {
    constructor(
      @Inject(GithubUserRepository) private githubUserRepo: GithubUserRepository
    ) {}

    async dispatch(user: string): Promise<GithubUser> {
      return await this.githubUserRepo.searchUser(user)
    }
}