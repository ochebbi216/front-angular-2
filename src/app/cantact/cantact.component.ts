import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cantact',
  templateUrl: './cantact.component.html',
  styleUrls: ['./cantact.component.scss']
})
export class CantactComponent implements OnInit {
  contactForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  submitForm(): void {
    if (this.contactForm.valid) {
      const formValues = this.contactForm.value;

      // Post form data to SheetDB
      fetch('https://sheetdb.io/api/v1/pbqv8ryqs1i06', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      })
        .then(() => {
          alert('Your message was sent successfully');
          this.contactForm.reset();
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('An error occurred. Please try again later.');
        });
    }
  }
}