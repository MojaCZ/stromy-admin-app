@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  private isRefreshing = false;
  private refreshTokenSubject: BehaviourSubject<any> = new BehaviorSubject<any>

  constructor(public authService: AuthService) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEventHandler> {
    if(this.authService.getJwtToken()) {
      request = this.addToken(request, this.authservice.getJwtToken());
      return next.handle(request).pipe(catchError(error => {
        if(error instanceof HttpErrorResponse && error.status === 401 ) {
          return this.handle401Error(request, next);
        } else {
          return throwError(error)
        }
      }))
    }

  }
}
