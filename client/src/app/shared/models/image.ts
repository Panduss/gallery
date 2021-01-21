export class Image {
  id: string;
  url: string;

  public constructor(url: string, id?: string) {
    this.id = id;
    this.url = url;
  }
}
