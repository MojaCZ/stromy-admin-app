import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {  }

  CanActivate(){
    if(this.AuthService.isLoggedIn()) {
      this.router.navigate(['/secret-random-number']);
    }
    return !this.authService.isLoggedIn();
  }

}
