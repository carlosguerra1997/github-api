import { GithubUserData } from '@modules/Infrastructure/Services/Github/Rest/User/GithubUserResponse'

export interface GithubUserRestRepository {
    obtainUser(user: string): Promise<GithubUserData>
    obtainhUserFollowers(user: string): Promise<GithubUserData[]>
    obtainhUserFollowing(user: string): Promise<GithubUserData[]>
}