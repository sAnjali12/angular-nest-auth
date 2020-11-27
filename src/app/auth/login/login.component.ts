import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import { AuthService} from '../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  login: FormGroup;
  submitted = false;
  error = '';
  loading = false;  


  constructor( private router: Router,
              private fb:FormBuilder,
              private auth:AuthService) {

              this.login = fb.group({
                username: ['admin', Validators.required],
                password: ['123', Validators.required]
            })


  }

  ngOnInit(): void {

  }
  get f() { return this.login.controls; }
  Login(){
    this.submitted = true;
    if (this.login.invalid) {
      return;
  }
    const value = (this.login.value)
    this.loading = true;
    if(value.username == "admin" && value.password == "123"){
      this.auth.login(this.f.username.value, this.f.password.value)
    .then(
      data => {
        this.router.navigate(['/home']);
      },
      error => {
          this.error = error;          
      });
    } else {
      alert("Failed to login. Plelase try agian later.");
    }
    
  }
}
