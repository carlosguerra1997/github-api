import { beforeEach, describe, expect, it } from 'vitest'
import { InternalServerErrorException, NotFoundException } from '@nestjs/common'

import { GithubReadUserFollowingController } from '@modules/Infrastructure/Controllers/V1/Github/User/GithubReadUserFollowingsController'

import { GithubUserFollowingRead } from '@modules/Application/Github/User/FollowingsLister/GithubUserFollowingRead'

import { GithubUserRepositoryStub } from '@test/Doubles/Stubs/GithubUserRepositoryStub'
import { RestException } from '@common/Infrastructure/Services/RestException'
import { mockAxiosError } from '@test/Doubles/Mocks/AxiosError'

describe('GithubReadUserFollowingController', () => {
  let repo: GithubUserRepositoryStub
  let reader: GithubUserFollowingRead
  let controller: GithubReadUserFollowingController

  beforeEach(() => {
    repo = new GithubUserRepositoryStub()
    reader = new GithubUserFollowingRead(repo)
    controller = new GithubReadUserFollowingController(reader)
  })

  it('Should fail when exception', () => {
    repo.hasError = true

    controller.readUserFollowing('carlosguerra').catch(error => {
      expect(error).toBeInstanceOf(InternalServerErrorException)
    })
  })

  it('Should fail when user not found', () => {
    const error = mockAxiosError('User not found', 404)

    repo.hasError = true
    repo.error = new RestException(error)

    controller.readUserFollowing('carlosguerra').catch(error => {
      expect(error).toBeInstanceOf(NotFoundException)
    })
  })

  it('Should run', async () => {
    repo.all()

    const result = await controller.readUserFollowing('carlosguerra')

    expect(result.message).toBe('success')
    expect(result.data).toHaveLength(1)
  })
})