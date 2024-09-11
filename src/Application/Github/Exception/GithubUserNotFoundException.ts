import { NotFoundError } from '@domain/Identity/Excception/NotFoundError'

export class GithubUserNotFoundException extends NotFoundError {
  constructor(message: string = 'User not found') {
    super(message)
  }
}