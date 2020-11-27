import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RoleService } from '../role.service';
import {Allrole } from '../../model/role.model'


@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.scss']
})
export class UpdateRoleComponent implements OnInit {
  
  role: Allrole = {
    name: '',
    displayName: '',
    description: '',
    isDeleted: false
  };
  edit: boolean = false;

  constructor(private roleService: RoleService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
      console.log(params.id)
      if (params.id) {
      this.roleService.getRole(params.id)
      .subscribe(
        res => {
        console.log(res);
        this.role = res;
        this.edit = true;
      },
      err => console.log(err)
      )
      }
  }

  updateRole() {
    const params = this.activatedRoute.snapshot.params;
    this.roleService.updateRole(params.id, this.role)
      .subscribe(
        res => {
          console.log(res);
          alert 
          this.router.navigate(['/role'])
        },
        err => console.log(err)
      )
  }
}
