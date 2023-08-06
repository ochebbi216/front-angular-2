import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ChildService } from '../services/child.service';
import { MessageService } from '../services/message.service';
import { ParentService } from '../services/parent.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  constructor(private fb: FormBuilder, private msjService: MessageService,private parentService: AuthService, private router: Router, private apiService: ChildService) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      EnfantAge: ['', Validators.required],
      EnfantName: ['', [Validators.required]],
      EnfantSexe: ['', [Validators.required]],
      EnfantParentId: [this.parentService.getParentId(), [Validators.required]],
      EnfantEthmicity: ['', [Validators.required]],
      EnfantJaundice: ['', Validators.required],
      EnfantFamelyMsd: ['', Validators.required],
    });
  }
  formGroup!: FormGroup;

  onSubmit(): void {
    this.formGroup.markAllAsTouched();

    if (this.formGroup.invalid) {
      this.msjService.errorMessage("Form has errors")

      return;
    }
            this.apiService.create(this.formGroup.value).subscribe(
              (response) => {
                console.log(response);
                this.msjService.successMessage("your child was added successfully, test started ");
                this.router.navigate(['/Questionnaire']);
              },
              (error) => {
                console.log(error);
                this.msjService.errorMessage(`Error ${error}`);
              }
            );
          }
        
      


  
  // ageExceedsLimit(): boolean {
  //   return this.child.age !== null && this.child.age > 36;
  // }


}
