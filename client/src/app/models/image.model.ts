export class Image {
  id?: string;
  url?: string;
  file?: File;
  title?: string;
  description?: string;

  public constructor(url?: string, id?: string, file?: File, title?: string, description?: string) {
    if (id) {this.id = id; }
    if (url) { this.url = url; }
    if (file) { this.file = file; }
    if (title) { this.title = title; }
    if (description) { this.description = description; }
  }
}
