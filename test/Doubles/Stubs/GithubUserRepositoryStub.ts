import { HttpStatus } from '@nestjs/common'

import { GithubUser } from '@modules/Domain/Github/User/GithubUser'
import { GithubUserRepository } from '@modules/Domain/Github/User/GithubUserRepository'

import { GithubUserRestException } from '@modules/Infrastructure/Services/Github/Rest/User/GithubUserRestException'
import { RestException } from '@common/Infrastructure/Services/RestException'

import { EntityRepositoryStub } from '@test/Doubles/Stubs/EntityRepositoryStub'
import { mockAxiosError } from '@test/Doubles/Mocks/AxiosError'

export class GithubUserRepositoryStub 
  extends EntityRepositoryStub<GithubUser>
  implements GithubUserRepository 
{
  private static readonly userKey = 'user'

  constructor () {
    super()

    this.error = new Error('dummy error')
    this.read = null
    this.list = []
  }

  async searchUser(username: string): Promise<GithubUser> {
    this.queryFilter = username

    if (this.hasError) {
      this.throwError()
    }

    return this.read
  }

  async searchUserFollowers(username: string): Promise<GithubUser[]> {
    this.queryFilter = username

    if (this.hasError) {
      this.throwError()
    }

    return this.list
  }

  async searchUserFollowing(username: string): Promise<GithubUser[]> {
    this.queryFilter = username

    if (this.hasError) {
      this.throwError()
    }

    return this.list
  }

  protected makeData(): void {
    const githubUser = new GithubUser(
      'https://github-avatar/carlosguerra.com',
      'carlosguerra',
      'Carlos Guerra',
      'carlosguerra@gmail.com',
      'Logroño',
      'Hiberus',
      10,
      'https://github-profile/carlosguerra.com'
    )

    this.add(GithubUserRepositoryStub.userKey, githubUser)
  }

  protected throwError(): void {
    if (!this.error) return

    if (this.error instanceof RestException && this.error.code === HttpStatus.NOT_FOUND) {
      const error = mockAxiosError('User not found', 404)

      throw new GithubUserRestException(error)
    }

    throw new Error(this.error.message)
  }
}