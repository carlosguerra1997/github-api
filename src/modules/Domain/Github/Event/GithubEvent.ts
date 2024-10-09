import { EventType } from '@modules/Domain/Github/Event/Types/EventTypes'
import { GithubRepository } from '@modules/Domain/Github/Repository/GithubRepository'
import { GithubUser } from '@modules/Domain/Github/User/GithubUser'

import { PushEvent } from '@modules/Domain/Github/Event/Types/PushEvent'

type EventPayloadMap = {
  [EventType.PushEvent]: PushEvent
}

export class GithubEvent<T extends EventType> {
  constructor(
    public id: string,
    public type: T,
    public user: Pick<GithubUser, 'username' | 'avatar'>,
    public repository: Pick<GithubRepository, 'id' | 'name' | 'url'>,
    public payload: EventPayloadMap[T],
    public isPublic: boolean,
    public createdAt: string
  ) {}
}