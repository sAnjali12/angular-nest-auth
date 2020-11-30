import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ActiverelationComponent } from './relation/activerelation/activerelation.component';
import { CreaterelationComponent } from './relation/createrelation/createrelation.component';
import { DiactiverelationComponent } from './relation/diactiverelation/diactiverelation.component';
import { RelationComponent } from './relation/relation.component';
import { ActiveroleComponent } from './role/activerole/activerole.component';
import { CreateRoleComponent } from './role/create-role/create-role.component';
import { DiactiveroleComponent } from './role/diactiverole/diactiverole.component';
import { RoleComponent } from './role/role.component';
import { UpdateRoleComponent } from './role/update-role/update-role.component';
import { ActiveuserComponent } from './user/activeuser/activeuser.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { DiactiveuserComponent } from './user/diactiveuser/diactiveuser.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { UserComponent } from './user/user.component';

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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
