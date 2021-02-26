export class User {
  public token: string;
  public id: string;
  public name: string;
  public email: string;

  public constructor(
    token: string,
    id: string,
    name: string,
    email: string
  ) {
    this.token = token;
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
