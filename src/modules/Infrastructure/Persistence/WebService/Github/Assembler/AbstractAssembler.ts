export abstract class AbstractAssembler<T, U> {
  constructor() {}

  protected abstract make(item: T): U
}