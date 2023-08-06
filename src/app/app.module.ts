import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbaarComponent } from './navbaar/navbaar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CantactComponent } from './cantact/cantact.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { TestapiComponent } from './testapi/testapi.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { TestapiCComponent } from './testapi-c/testapi-c.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbaarComponent,
    FooterComponent,
    LoginComponent,
    CreateAccountComponent,
    ForgetPasswordComponent,
    QuestionnaireComponent,
    ParentComponent,
    ChildComponent,
    CantactComponent,
    WhoWeAreComponent,
    TestapiComponent,
    NotfoundComponent,
    TestapiCComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 5000, // 5 seconds
      positionClass: 'toast-top-right',
      closeButton: true,
      progressBar: true,
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }