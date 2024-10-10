import { GithubUser } from '@modules/Domain/Github/User/GithubUser'

import { githubUserSerialize } from '@modules/Presentation/Github/User/GithubUserSerialize'
import { Result } from '@modules/Presentation/Identity/Result'

export class GithubUserReadView extends Result {
    constructor(item: GithubUser) {
        super(Result.successMessage)
        this.data = githubUserSerialize(item)
    }
}