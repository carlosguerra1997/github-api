import { beforeEach, describe, expect, it } from 'vitest'

import { GithubUserFollowersRead } from '@modules/Application/Github/User/FollowersLister/GithubUserFollowersRead'

import { GithubUserRepositoryStub } from '@test/Doubles/Stubs/GithubUserRepositoryStub'

describe('GithubUserFollowersRead', () => {
  let repo: GithubUserRepositoryStub
  let reader: GithubUserFollowersRead

  beforeEach(() => {
    repo = new GithubUserRepositoryStub()
    reader = new GithubUserFollowersRead(repo)
  })

  it('Should run', async () => {
    repo.all()

    const items = await reader.dispatch('carlosguerra')

    expect(items).toHaveLength(1)
    expect(items[0].username).toBe('carlosguerra')
  })
})