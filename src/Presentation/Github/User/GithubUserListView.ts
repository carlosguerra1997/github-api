import { GithubUser } from '@domain/Github/User/GithubUser'

import { Result } from '@presentation/Identity/Result'
import { githubUserSerialize } from './GithubUserSerialize'

export class GithubUserListView extends Result {
    constructor(items: GithubUser[]) {
        super(Result.successMessage)
        this.data = items.map(item => githubUserSerialize(item))
    }
}