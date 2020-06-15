import { Injectable } from '@angular/core';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { Tokens } from '../models/tokens';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private loggerUser: string;

  constructor(private http: HttpClient) {}

  login(user: { username: string, password: string }): Observable<boolean> {
    return this.http.post<any>('', user)
      .pipe(
        tap(token => this.doLoginUser(user.username, tokens)),
        mapTo(true),
        catchError(error => {
          alert(error.error);
          return of(false);
        })
      )
  }

  logout(){
    return this.http.post<any>('', {
      'refreshToken': this.getRefreshToken()
    }).pipe(
      tap(() => this.doLogoutUser()),
      mapTo(true),
      catchError(error => {
        alert(error.error);
        return of(false);
      })
    )
  }

  isLoggedIn(){
    return !!this.getJwtToken();
  }

  refreshToken(){
    return this.http.post<any>('', {
      'refreshToken': this.getRefreshToken()
    }).pipe(tap((tokens: Tokens) => {
      this.storeJwtToken(tokens.jwt);
    }))
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

}
