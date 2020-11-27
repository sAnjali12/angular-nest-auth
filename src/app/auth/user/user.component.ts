import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { User} from '../model/user.model';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
  
  constructor(private userService: UserService) { }
  user: User[] = [];
  


  
  ngOnInit(){
    this.getAll()
  }

  getAll(): void {
    this.userService.getUsers()
    .subscribe(
    res => this.user = res,
    err => console.log(err)
    )
  }

  deleteuser(id:string): void {
    this.userService.deleteUser(id)
      .subscribe(
        res => {
          console.log(res);
          this.getAll();
        },
        err => console.log(err)
      )
  }
}
