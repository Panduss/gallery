import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../../../server/src/models/user";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public constructor(
    private http: HttpClient
  ) {
  }

  public login(email: string, password: string): Observable<User> {
    console.log(email, password);
    return this.http.post<User>(environment.api + "login", {email, password});
  }
}
