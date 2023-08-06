import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Parent } from '../parentLogin.interface';
import { ParentService } from '../services/parent.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  hide=true;
  url: any;
  constructor(private formBuilder: FormBuilder, private msjService : MessageService,    private actrouter :ActivatedRoute,  private router: Router, private parentService: ParentService) {
    this.url=this.actrouter.snapshot.queryParams['returnUrl'] || '/Parent'

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  private readonly STORAGE_KEY = 'parentAuthData';

  // LoginComponent
onSubmit() {
  if (this.loginForm.valid) {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.parentService.getall2().subscribe(
      (data: Parent[]) => {
        console.log('API Response:', data); // Check the API response in the browser console

        const matchedParent = data.find((parent) => parent.ParentMail === email && parent.ParentPwd === password);

        if (matchedParent) {
          console.log('Login successful:', matchedParent); // Log the matched parent details
          
          this.msjService.successMessage("You are now logged in!");
          this.router.navigate([this.url]);

          // Store ParentID and ParentMail in local storage
          const authData = { ParentID: matchedParent.ParentId, ParentMail: matchedParent.ParentMail };
          localStorage.setItem(this.STORAGE_KEY, JSON.stringify(authData));
        } else {
          console.log('Login failed: Invalid credentials'); // Log login failure
          this.msjService.warningMessage("Login failed: Invalid credentials")
          // this.toastr.error('Login failed! Invalid credentials.', 'Echoué!', { timeOut: 5000 });

        }
      },
      (error) => {
        console.error('Error retrieving parent data:', error); // Log API call error
        this.msjService.errorMessage(error)
      }
    );
  }
}

}