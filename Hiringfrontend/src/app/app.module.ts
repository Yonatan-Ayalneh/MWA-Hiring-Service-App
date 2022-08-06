import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { SignupComponent } from './signup/signup.component';

import { HomeComponent } from './home/home.component';

import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HeaderComponent },
      { path: 'signup', component: SignupComponent },
    ]),
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],

  providers: [HttpClientModule],

  // providers: [
  //   // {
  //   //   provide: HTTP_INTERCEPTORS,
  //   //   useClass: ConfigInterceptor,
  //   //   multi: true,
  //   // },
  // ],

  bootstrap: [AppComponent],
})
export class AppModule {}
