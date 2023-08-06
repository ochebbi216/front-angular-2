import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly STORAGE_KEY = 'parentAuthData';

  constructor(private router: Router) {}

  login(email: string, id: number) {
    // You can perform login logic here
    // For simplicity, just storing the email and ID in local storage for demonstration
    const authData = { email, id };
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(authData));
  }
  getParentId(){
    const RauthData = JSON.parse(localStorage.getItem(this.STORAGE_KEY)!);
    const parentId = RauthData ? RauthData.ParentID : null;
    return parentId;
    }
  logout() {
    // Clear the authentication data from local storage upon logout
    localStorage.removeItem(this.STORAGE_KEY);
    // Redirect to the login page or any other desired page after logout
    // this.router.navigate(['/login']); // Replace '/login' with the correct route path for the login page
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login'],{queryParams:{returnUrl:state.url}})
    this.logout();
    return false;
  }
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
}
