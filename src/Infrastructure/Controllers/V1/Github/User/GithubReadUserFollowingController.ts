import { Controller, Get, Param } from '@nestjs/common'

import { GithubUserFollowingRead } from '@application/Github/User/FollowingReader/GithubUserFollowingRead'

import { GithubUserListView } from '@presentation/Github/User/GithubUserListView'

@Controller('/v1/user')
export class GithubReadUserFollowingController {
    constructor(
        private reader: GithubUserFollowingRead
    ) {}

    @Get(':user/following')
    async readUserFollowing(@Param('user') user: string) {
      try {
        const userFollowing = await this.reader.dispatch(user)
        const result = new GithubUserListView(userFollowing)
        return result
      } catch (error) {
        // Gestionar excepciones
      }
    }
}