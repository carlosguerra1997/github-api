import { EventTypes } from '@modules/Domain/Github/Event/Types/EventTypes'
import { GithubEvent } from '@modules/Domain/Github/Event/GithubEvent'

import { Result } from '@modules/Presentation/Identity/Result'

export class GithubEventReadView extends Result {
  constructor(item: GithubEvent<EventTypes>) {
    super(Result.successMessage)
    this.data = []
  }
}