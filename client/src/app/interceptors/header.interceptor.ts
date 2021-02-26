import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "../services/auth.service";

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  public constructor(
    private authService: AuthService
  ) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const currentUser = this.authService.currentUser;

    if (currentUser && currentUser.token) {
      req = req.clone({
        setHeaders: {
          authorization: currentUser.token
        }
      });
    }

    return next.handle(req);
  }
}
