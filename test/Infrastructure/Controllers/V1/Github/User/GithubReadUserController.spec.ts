import { beforeEach, describe, expect, it } from 'vitest'
import { InternalServerErrorException, NotFoundException } from '@nestjs/common'

import { RestException } from '@common/Infrastructure/Services/RestException'

import { GithubUserRead } from '@modules/Application/Github/User/Reader/GithubUserRead'
import { GithubReadUserController } from '@modules/Infrastructure/Controllers/V1/Github/User/GithubReadUserController'

import { mockAxiosError } from '@test/Doubles/Mocks/AxiosError'
import { GithubUserRepositoryStub } from '@test/Doubles/Stubs/GithubUserRepositoryStub'

describe('GithubReadUserController', () => {
  let repo: GithubUserRepositoryStub
  let reader: GithubUserRead
  let controller: GithubReadUserController

  beforeEach(() => {
    repo = new GithubUserRepositoryStub()
    reader = new GithubUserRead(repo)
    controller = new GithubReadUserController(reader)
  })

  it('Should fail when exception', () => {
    repo.hasError = true

    controller.readUser('itdoesntexist').catch(error => {
      expect(error).toBeInstanceOf(InternalServerErrorException)
    })
  })

  it('Should fail when user not found', () => {
    const error = mockAxiosError('User not found', 404)

    repo.hasError = true
    repo.error = new RestException(error)

    controller.readUser('itdoesntexist').catch(error => {
      expect(error).toBeInstanceOf(NotFoundException)
    })
  })

  it('Should run', async () => {
    repo.get('user')

    const result = await controller.readUser('carlosguerra')

    expect(result.message).toBe('success')
    expect(result.data.username).toBe('carlosguerra')
  })
})