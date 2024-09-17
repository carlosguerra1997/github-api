import { GithubUser } from '@domain/Github/User/GithubUser'

export interface GithubUserRepository {
    searchUser(username: string): Promise<GithubUser>
    searchUserFollowers(username: string): Promise<GithubUser[]>
    searchUserFollowing(username: string): Promise<GithubUser[]>
}

export const GithubUserRepository = Symbol('GithubUserRepository')