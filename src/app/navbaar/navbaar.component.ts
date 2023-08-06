import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbaar',
  templateUrl: './navbaar.component.html',
  styleUrls: ['./navbaar.component.scss']
})
export class NavbaarComponent {
  // isLoggedIn: boolean;
  constructor( public authService: AuthService , public Router: Router) {
    // this.isLoggedIn=authService.isLoggedIn()

  }

  onLogoutClick() {
    this.authService.logout();
    // this.toast.success({detail:"À plus tard " ,summary:"Vous êtes maintenant déconnecté",duration:5000})
    this.Router.navigate(['/login']);

  }
}
