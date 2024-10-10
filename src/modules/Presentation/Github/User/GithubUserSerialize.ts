import { GithubUser } from '@modules/Domain/Github/User/GithubUser'

export interface GithubUserItemReadView {
    avatar: string
    username: string
    name: string
    email: string
    location: string
    company: string
    following: number
    profile: string
}

export const githubUserSerialize = (item: GithubUser): GithubUserItemReadView => ({
    avatar: item.avatar,
    username: item.username,
    name: item.name,
    email: item.email,
    location: item.location,
    company: item.company,
    following: item.following,
    profile: item.url
})