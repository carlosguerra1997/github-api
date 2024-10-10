import { GithubUser } from '@modules/Domain/Github/User/GithubUser'

import { Result } from '@modules/Presentation/Identity/Result'
import { githubUserSerialize } from '@modules/Presentation/Github/User/GithubUserSerialize'

export class GithubUserListView extends Result {
    constructor(items: GithubUser[]) {
        super(Result.successMessage)
        this.data = items.map(item => githubUserSerialize(item))
    }
}