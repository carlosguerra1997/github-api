export class ListField {
  constructor(
    public name: string
  ) {}

  static parse(name: string): ListField {
    return new ListField(name)
  
  }
}