export class Image {
  id: string;
  url: string;

  public constructor(url: string, id?: string) {
    if (id) { this.id = id; }
    this.url = url;
  }
}
