import { EventTypes } from '@modules/Domain/Github/Event/Types/EventTypes'
import { GithubEvent } from '@modules/Domain/Github/Event/GithubEvent'

import { githubEventSerialize } from '@modules/Presentation/Github/Activity/Event/GithubEventSerialize'
import { Result } from '@modules/Presentation/Identity/Result'

export class GithubEventListView extends Result {
  constructor(items: GithubEvent<EventTypes>[]) {
    super(Result.successMessage)
    this.data = items.map(item => githubEventSerialize(item))
  }
}