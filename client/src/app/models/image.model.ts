export class Image {
  id?: string;
  pageId: string;
  file?: File;
  title?: string;
  description?: string;
  url?: string;

  public constructor(pageId: string, file: File, title: string, description: string, url?: string, id?: string) {
    if (pageId) { this.pageId = pageId; }
    if (id) { this.id = id; }
    if (url) { this.url = url; }
    if (file) { this.file = file; }
    if (title) { this.title = title; }
    if (description) { this.description = description; }
  }
}
