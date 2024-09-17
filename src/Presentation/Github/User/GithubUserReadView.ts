import { GithubUser } from '@domain/Github/User/GithubUser'

import { githubUserSerialize } from '@presentation/Github/User/GithubUserSerialize'
import { Result } from '@presentation/Identity/Result'

export class GithubUserReadView extends Result {
    constructor(item: GithubUser) {
        super(Result.successMessage)
        this.data = githubUserSerialize(item)
    }
}