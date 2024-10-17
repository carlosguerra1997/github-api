export class ListFilter {
  constructor(
    public name: string,
    public value: string
  ) {}

  public isValid(): boolean {
    return this.name !== ''
  }
}