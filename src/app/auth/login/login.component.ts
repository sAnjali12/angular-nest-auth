import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  login: FormGroup;

  constructor( private router: Router,
              private fb:FormBuilder) {

              this.login = fb.group({
                username: ['admin', [Validators.required]],
                password: ['123', [Validators.required]]
            })


  }

  ngOnInit(): void {

  }

  Login() {

    const val = this.login.value;
    this.router.navigate(['/home']);

          
  }

}
