import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import{Routes,RouterModule}  from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http'
import {HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser'


import{AuthComponent} from './auth.component';
import{LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { RelationComponent } from './relation/relation.component'
import { AuthService} from './auth.service';
import { AuthGuardService } from './auth.guard.service'
import { UserService} from './user/user.service';
import { RoleService } from './role/role.service';
import { RelationService } from './relation/relation.service';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { CreateRoleComponent } from './role/create-role/create-role.component';
import { UpdateRoleComponent } from './role/update-role/update-role.component';
import { CreaterelationComponent } from './relation/createrelation/createrelation.component';
import { HomeheaderComponent } from './homeheader/homeheader.component';
import { ActiveuserComponent } from './user/activeuser/activeuser.component';
import { DiactiveuserComponent } from './user/diactiveuser/diactiveuser.component';
import { DiactiveroleComponent } from './role/diactiverole/diactiverole.component';
import { ActiveroleComponent } from './role/activerole/activerole.component';
import { ActiverelationComponent } from './relation/activerelation/activerelation.component';
import { DiactiverelationComponent } from './relation/diactiverelation/diactiverelation.component';

const routes:Routes=[
    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'user',component:UserComponent},
    {path:'role',component:RoleComponent},
    {path:'relation',component:RelationComponent},
    {path:'updateuser/:id',component:UpdateUserComponent},
    {path:'createuser',component:CreateUserComponent},
    {path:'createrole',component:CreateRoleComponent},
    {path:'updaterole/:id',component:UpdateRoleComponent},
    {path:'createrelation',component:CreaterelationComponent},
    {path:'activeuser',component:ActiveuserComponent},
    {path:'diactiveuser',component:DiactiveuserComponent},
    {path:'activerole',component:ActiveroleComponent},
    {path:'diactiverole',component:DiactiveroleComponent},
    {path:'activerelation',component:ActiverelationComponent},
    {path:'diactiverelation',component:DiactiverelationComponent}
  ]

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    UserComponent,
    RoleComponent,
    RelationComponent,
    UpdateUserComponent,
    CreateUserComponent,
    CreateRoleComponent,
    UpdateRoleComponent,
    CreaterelationComponent,
    HomeheaderComponent,
    ActiveuserComponent,
    DiactiveuserComponent,
    DiactiveroleComponent,
    ActiveroleComponent,
    ActiverelationComponent,
    DiactiverelationComponent,
    
    
    

  
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    BrowserModule
  
  ],
  providers: [AuthService, UserService, AuthGuardService, RoleService, RelationService],
})
export class AuthModule { }
