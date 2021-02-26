import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Image} from "../models/image.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ImageService {
  public constructor(
    private http: HttpClient
  ) {
  }

  public getImages(pageId: string): Observable<Array<Image>> {
    return this.http.get<Array<Image>>(`${environment.api}/images/${pageId}`);
  }

  public addImage(pageId: string, image: Image): Observable<>
}
