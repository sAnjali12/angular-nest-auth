import { Component, OnInit } from '@angular/core';

import { RoleService } from '../role.service';
import {Role} from '../../model/role.model';

@Component({
  selector: 'app-activerole',
  templateUrl: './activerole.component.html',
  styleUrls: ['./activerole.component.scss']
})
export class ActiveroleComponent implements OnInit {

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
}
