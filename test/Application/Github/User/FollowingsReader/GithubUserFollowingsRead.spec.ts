import { beforeEach, describe, expect, it } from 'vitest'

import { GithubUserFollowingRead } from '@modules/Application/Github/User/FollowingsLister/GithubUserFollowingRead'

import { GithubUserRepositoryStub } from '@test/Doubles/Stubs/GithubUserRepositoryStub'

describe('GithubUserFollowingsRead', () => {
  let repo: GithubUserRepositoryStub
  let reader: GithubUserFollowingRead

  beforeEach(() => {
    repo = new GithubUserRepositoryStub()
    reader = new GithubUserFollowingRead(repo)
  })

  it('Should run', async () => {
    repo.all()

    const items = await reader.dispatch('carlosguerra')

    expect(items).toHaveLength(1)
    expect(items[0].username).toBe('carlosguerra')
  })
})