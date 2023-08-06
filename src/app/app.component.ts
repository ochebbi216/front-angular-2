import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Add this import
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',

    styleUrls: ['app.component.scss']
})
export class AppComponent{
    title='test'
    constructor(public router: Router) { }
}
export class LoginFormComponent {
    username: string = '';
    password: string = '';

    submitForm() {
  
        
    }
}
export class LoginComponent{
    
}