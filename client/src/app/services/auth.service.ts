import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {AuthUser} from "../../../../server/src/models/auth";
import {StorageProvider} from "../providers/storage.provider";
import {User} from "../models/user.model";

@Injectable({
  providedIn: "root"
})
export class AuthService {

  public user: BehaviorSubject<User>;
  public user$: Observable<User>;

  public constructor(
    private http: HttpClient,
    private storage: StorageProvider
  ) {
    this.user = new BehaviorSubject<User>(JSON.parse(localStorage.getItem("user")));
    this.user$ = this.user.asObservable();
  }

  public get currentUser(): User {
    return this.user.value;
  }

  public login(email: string, password: string): Observable<AuthUser> {
    return this.http.post<any>(`${environment.api}/login`, { email, password }).pipe(
      map(user => {
        this.storage.setItem("user", JSON.stringify(user));
        this.user.next(user);
        return user;
      }));
  }
}
