import { NotFoundError } from '@domain/Identity/Exception/NotFoundError'

export class GithubUserNotFoundException extends NotFoundError {
  constructor(message: string = 'User not found') {
    super(message)
  }
}