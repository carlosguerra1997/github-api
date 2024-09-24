import { Controller, Get, Param } from '@nestjs/common'

import { GithubUserFollowersRead } from '@application/Github/User/FollowersReader/GithubUserFollowersRead'

import { GithubUserListView } from '@presentation/Github/User/GithubUserListView'
import { Result } from '@presentation/Identity/Result'

@Controller('/v1/user')
export class GithubReadUserFollowersController {
    constructor(
        private reader: GithubUserFollowersRead
    ) {}

    @Get(':user/followers')
    async readUserFollowers(@Param('user') user: string): Promise<Result> {
        try {
            const userFollowers = await this.reader.dispatch(user)
            const result = new GithubUserListView(userFollowers)
            return result
        } catch (error) {
            // Gestionar excepciones
        }
    }
}