import { GithubUserData } from '@infrastructure/Services/Github/Rest/User/GithubUserResponse'

export interface GithubUserRestRepository {
    obtainUser(user: string): Promise<GithubUserData>
    obtainhUserFollowers(user: string): Promise<GithubUserData[]>
    obtainhUserFollowing(user: string): Promise<GithubUserData[]>
}