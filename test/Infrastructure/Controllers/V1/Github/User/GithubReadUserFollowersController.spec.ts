import { beforeEach, describe, expect, it } from 'vitest'
import { InternalServerErrorException, NotFoundException } from '@nestjs/common'

import { RestException } from '@common/Infrastructure/Services/RestException'

import { GithubReadUserFollowersController } from '@modules/Infrastructure/Controllers/V1/Github/User/GithubReadUserFollowersController'

import { GithubUserFollowersRead } from '@modules/Application/Github/User/FollowersLister/GithubUserFollowersRead'

import { mockAxiosError } from '@test/Doubles/Mocks/AxiosError'
import { GithubUserRepositoryStub } from '@test/Doubles/Stubs/GithubUserRepositoryStub'

describe('GithubReadUserFollowersController', () => {
  let repo: GithubUserRepositoryStub
  let reader: GithubUserFollowersRead
  let controller: GithubReadUserFollowersController

  beforeEach(() => {
    repo = new GithubUserRepositoryStub()
    reader = new GithubUserFollowersRead(repo)
    controller = new GithubReadUserFollowersController(reader)
  })

  it('Should fail when exception', () => {
    repo.hasError = true

    controller.readUserFollowers('itdoesntexist').catch(error => {
      expect(error).toBeInstanceOf(InternalServerErrorException)
    })
  })

  it('Should fail when user not found', () => {
    const error = mockAxiosError('User not found', 404)

    repo.hasError = true
    repo.error = new RestException(error)

    controller.readUserFollowers('itdoesntexist').catch(error => {
      expect(error).toBeInstanceOf(NotFoundException)
    })
  })

  it('Should run', async () => {
    repo.all()

    const result = await controller.readUserFollowers('carlosguerra')
    
    expect(result.message).toBe('success')
    expect(result.data).toHaveLength(1)
  })
})