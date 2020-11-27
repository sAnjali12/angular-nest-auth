import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import {update } from '../../model/user.model'

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  user: update = {
    username: '',
    password: '',
    isDeleted: false
  };
  edit: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
      console.log(params.id)
      if (params.id) {
      this.userService.getUser(params.id)
      .subscribe(
        res => {
        console.log(res);
        this.user = res;
        this.edit = true;
      },
      err => console.log(err)
      )
      }
  }

  updateUser() {
    const params = this.activatedRoute.snapshot.params;
    this.userService.updateuser(params.id, this.user)
      .subscribe(
        res => {
          console.log(res);

          this.router.navigate(['/user'])
        },
        err => console.log(err)
      )
  }

}
