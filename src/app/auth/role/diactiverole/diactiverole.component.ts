import { Component, OnInit } from '@angular/core';

import { RoleService } from '../role.service';
import {Role} from '../../model/role.model';

@Component({
  selector: 'app-diactiverole',
  templateUrl: './diactiverole.component.html',
  styleUrls: ['./diactiverole.component.scss']
})
export class DiactiveroleComponent implements OnInit {

  
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
