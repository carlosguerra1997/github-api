import { beforeEach, describe, expect, it } from 'vitest'

import { GithubUserRead } from '@modules/Application/Github/User/Reader/GithubUserRead'

import { GithubUserRepositoryStub } from '@test/Doubles/Stubs/GithubUserRepositoryStub'

describe('GithubUserRead', () => {
  let repo: GithubUserRepositoryStub
  let reader: GithubUserRead

  beforeEach(() => {
    repo = new GithubUserRepositoryStub()
    reader = new GithubUserRead(repo)
  })

  it('Should run', async () => {
    repo.get('user')

    const item = await reader.dispatch('carlosguerra')
    
    expect(item.username).toBe('carlosguerra')
  })
})