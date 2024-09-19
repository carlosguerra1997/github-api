import { GithubEvent } from '@domain/Github/Event/GithubEvent'

export interface GithubEventRepository {
  searchActivityByUser(username: string): Promise<GithubEvent[]>
}

export const GithubEventRepository = Symbol('GithubEventRepository')