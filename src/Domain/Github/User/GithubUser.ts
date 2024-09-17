export class GithubUser {
  constructor(
    public avatar: string,
    public username: string,
    public name: string,
    public email: string,
    public location: string,
    public company: string,
    public following: number,
    public url: string,
  ) {}
}