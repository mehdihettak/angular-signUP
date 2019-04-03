import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUP2Component } from './sign-up2/sign-up2.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { AttributeDirective } from './attribute.directive';
import { HightLightDirective } from './hight-light.directive';
import { DisplayMoviesDirective } from './display-movies.directive';
import { MenuComponent } from './menu/menu.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';



const ROUTES: Routes = [
  { path: 'signup', component: SignUP2Component },
  { path: 'user', component: UserProfilComponent },
  {
    path: '',
    redirectTo: '/user',
    pathMatch: 'full'
  },
 
];



@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    SignUP2Component,
    UserProfilComponent,
    AttributeDirective,
    HightLightDirective,
    DisplayMoviesDirective,
    MenuComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
 
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
