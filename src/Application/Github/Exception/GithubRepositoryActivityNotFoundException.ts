import { NotFoundError } from '@domain/Identity/Excception/NotFoundError'

export class GithubRepositoryActivityNotFoundException extends NotFoundError {
  constructor(message: string = 'Repository activity not found') {
    super(message)
  }
}