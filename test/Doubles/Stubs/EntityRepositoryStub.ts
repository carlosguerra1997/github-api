import { RestException } from '@common/Infrastructure/Services/RestException'

export abstract class EntityRepositoryStub<T> {
  public error: Error | RestException
  public hasError: boolean = false
  protected list: T[]
  protected read: T | null = null 
  protected repositoryData: Map<string, T>
  protected queryFilter: string

  constructor () {
    this.repositoryData = new Map<string, T>
    this.makeData()
  }

  public get(key: string) {
    const item: T = this.repositoryData.get(key)
    this.read = item
  }

  public all() {
    const data: T[] = Array.from(this.repositoryData.values())
    this.list = data
  }

  protected add(key: string, item: T) {
    this.repositoryData.set(key, item)
  }

  protected throwError() {
    if (!this.error) return
    throw new Error(this.error.message)
  }

  protected abstract makeData()
}