import { Component, OnInit } from '@angular/core';

import { User } from '../../model/user.model';
import { UserService } from '../user.service'

@Component({
  selector: 'app-activeuser',
  templateUrl: './activeuser.component.html',
  styleUrls: ['./activeuser.component.scss']
})
export class ActiveuserComponent implements OnInit {

  constructor(private userservice:UserService) { }
  user: User[] = [];
  


  
  ngOnInit(){
    this.getAll()
  }

  getAll(): void {
    this.userservice.getUsers()
    .subscribe(
    res => this.user = res,
    err => console.log(err)
    )
  }
}
