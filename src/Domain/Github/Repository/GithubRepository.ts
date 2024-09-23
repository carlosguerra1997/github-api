import { GithubUser } from '@domain/Github/User/GithubUser'

export class GithubRepository {
  constructor(
    public id: number,
    public name: string,
    public owner: GithubUser,
    public description: string,
    public url: string,
    public fork: boolean,
    public mainLanguage: string,
    public visibility: string,
    public allowForking: boolean,
    public forks: number,
    public hasIssues: boolean,
    public openIssues: number,
    public cloneUrl: string,
    public sshUrl: string,
    public license: string,
    public createdAt: string,
    public updatedAt: string
  ) {}
}