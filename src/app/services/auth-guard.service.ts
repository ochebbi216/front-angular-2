import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service'; // Replace 'AuthService' with your actual authentication service
import { MessageService } from './message.service'; // Replace 'MessageService' with your actual message service

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate, CanActivateChild {
  private readonly STORAGE_KEY = 'parentAuthData';

  constructor(private msjService: MessageService, public authService: AuthService, private router: Router) {}

  getAuthData(): { email: string; id: number } | null {
    // Retrieve the authentication data from local storage
    const storedData = localStorage.getItem(this.STORAGE_KEY);
    if (storedData) {
      return JSON.parse(storedData);
    }
    return null;
  }

  isLoggedIn(): boolean {
    // Check if the user is logged in based on the presence of authentication data in local storage
    return this.getAuthData() !== null;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkLogin(state.url);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkLogin(state.url);
  }

  private checkLogin(url: string): boolean {
    if (this.isLoggedIn() && url === '/login') {
      // If the user is logged in and trying to access the login page,
      // redirect them to another page, for example, the home page.
      this.router.navigate(['/Parent']);
      return false;
    } else if (!this.isLoggedIn() && url !== '/login') {
      // If the user is not logged in and trying to access any page other than login,
      // redirect them to the login page and store the intended URL as a query parameter.
      this.msjService.errorMessage('Your session has ended, please log in again.');
      this.router.navigate(['/login'], { queryParams: { returnUrl: url } });
      return false;
    }
    return true;
  }
}
