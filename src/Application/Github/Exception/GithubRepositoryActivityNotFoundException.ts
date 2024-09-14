import { NotFoundError } from '@domain/Identity/Exception/NotFoundError'

export class GithubRepositoryActivityNotFoundException extends NotFoundError {
  constructor(message: string = 'Repository activity not found') {
    super(message)
  }
}