import {TabType} from "./tabType.model";
import {Image} from "./image.model";

export class Page {
  public id: string;
  public type: TabType;
  public title: string;
  public subtitle: string;
  public images: Array<Image>;

  public constructor(
    type: TabType,
    title: string,
    subtitle: string,
    images: Array<Image>,
    id?: string
  ) {
    if (id) {
      this.id = id;
    }
    this.type = type;
    this.title = title;
    this.subtitle = subtitle;
    this.images = images;
  }
}
