import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  FormGroup!: FormGroup;
  showCodeInput: boolean = false; // Control the visibility of the code input and new password fields

  ngOnInit() {
    this.FormGroup = new FormGroup({
      email: new FormControl('', Validators.required),
      newpassword: new FormControl('', Validators.required),
      confirmpassword: new FormControl('', Validators.required),
      code: new FormControl(''), // Add the code FormControl
    });
  }

  onSubmit() {
    if (!this.showCodeInput) {
      // Step 1: Submit the email, validate it, and send a code to the user's email (you need to implement this logic)
      // For this example, I'll just simulate a success response after 2 seconds delay
      this.showCodeInput = true; // Move to the next step (code acceptance and new password)
      setTimeout(() => {
        console.log('Email submitted successfully. Code sent to the user.');
      }, 2000);
    } else {
      // Step 2: Submit the code and new password
      console.log(this.FormGroup.value);
      // Add your logic here to validate the code and reset the password
      
      // After successful code acceptance and password reset, you can redirect the user to the login page or display a success message
      this.showCodeInput = false; // Reset the form to its initial state
    }
  }
}
