import { NotFoundError } from '@domain/Identity/Exception/NotFoundError'

export class GithubRepositoryNotFoundException extends NotFoundError {
  constructor(message: string = 'Repository not found') {
    super(message)
  }
}