import { Component, OnInit } from '@angular/core';


import { RoleService } from './role.service';
import {Role} from '../model/role.model';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  constructor(private roleService: RoleService) { }
  role: Role[]=[];

  ngOnInit(){
    this.getAll()
  }

  getAll(): void {
    this.roleService.getRoles()
    .subscribe(
    res => this.role = res,
    err => console.log(err)
    )
  }

  deleterole(id:string): void {
    alert("Hello.. are you sure for!!");
    this.roleService.deleteRole(id)
      .subscribe(
        res => {
          console.log(res);
          this.getAll();
        },
        err => console.log(err)
      )
  }

}
