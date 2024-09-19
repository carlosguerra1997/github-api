import { GithubUser } from '@domain/Github/User/GithubUser'
import { GithubActivityPayload } from '@domain/Github/Event/GithubActivityPayload'
import { GithubActivityRepository } from '@domain/Github/Event/GithubActivityRepository'

export class GithubEvent {
  constructor(
    public id: string,
    public type: string,
    public user: GithubUser,
    public repository: GithubActivityRepository,
    public payload: GithubActivityPayload,
    public isPublic: boolean,
    public createdAt: string
  ) {}
}