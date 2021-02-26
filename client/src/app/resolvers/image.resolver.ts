import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import { Image } from "../models/image.model";
import { ImageService } from "../services/image.service";

@Injectable()
export class ImageResolver implements Resolve<Array<Image>> {

  public constructor(
    private readonly imageService: ImageService
  ) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Image>> {
    return this.imageService.getImages(route.params.id);
  }
}
