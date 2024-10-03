export class Result {
  protected static readonly successMessage: string = 'success'

  constructor (
    public message: string,
    public data: any = null
  ) {}

  public static success (data: any = []) {
    return new Result(Result.successMessage, data)
  }
}