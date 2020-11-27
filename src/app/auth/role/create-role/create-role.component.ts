import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


import { RoleService } from '../role.service'

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.scss']
})
export class CreateRoleComponent implements OnInit {
  role: FormGroup;

  constructor( private roleService: RoleService,
    private router: Router,
    private fb:FormBuilder) { 
      
      this.role = fb.group({
        name: ['', Validators.required],
        displayName: ['', Validators.required],
        description: ['', Validators.required]
      })
    }
  ngOnInit(): void {
  }

  submitRole() {

    this.roleService.createRole(this.role.value)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/role']);
        },
        err => console.log(err)
      )
  }

}
