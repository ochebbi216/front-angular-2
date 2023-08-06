import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CreateAccountComponent } from './create-account/create-account.component'; // Import the CreateAccountComponent
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { CantactComponent } from './cantact/cantact.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { TestapiComponent } from './testapi/testapi.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { TestapiCComponent } from './testapi-c/testapi-c.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },

  {
    path: 'create-account', component: CreateAccountComponent, 
  },
  {
     path: 'login', component: LoginComponent  , canActivate: [AuthGuardService]
  },
  {
    path: 'forget-password', component: ForgetPasswordComponent
  },
  { 
    path: 'Parent', component: ParentComponent , canActivate: [AuthService]
  },
  { 
    path: 'Child', component: ChildComponent , canActivate: [AuthService]
  },
  { 
    path: 'Questionnaire', component: QuestionnaireComponent , canActivate: [AuthService]
  },
  { 
    path: 'cantact', component: CantactComponent 
  },
  { 
    path: 'whoWeAre', component: WhoWeAreComponent
  },
  { 
    path: 'tabp', component: TestapiComponent //, canActivate: [AuthService]
  },
  { 
    path: 'tabc', component: TestapiCComponent //, canActivate: [AuthService]
  },
  {
    path:'404',component:NotfoundComponent 
  },

  { 
    path: '**', redirectTo: '404' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
