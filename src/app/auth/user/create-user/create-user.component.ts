import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


import { UserService } from '../user.service'

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  user: FormGroup;

  constructor( private userService: UserService,
    private router: Router,
    private fb:FormBuilder) { 
      
      this.user = fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    })
    }

  ngOnInit(): void {
  }

  submitProduct() {

    this.userService.createUser(this.user.value)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/user']);
        },
        err => console.log(err)
      )
  }
}
