import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import{Routes,RouterModule}  from '@angular/router';
import { CommonModule } from '@angular/common';

import{AuthComponent} from './auth.component';
import{LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component'

const routes:Routes=[
    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent},


    
]

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,

  
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class AuthModule { }
