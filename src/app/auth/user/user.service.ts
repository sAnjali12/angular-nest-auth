import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Router } from '@angular/router';

import { Alluser, User, update } from '../model/user.model'
import { AuthService } from '../auth.service'

export class UserData{
  constructor(
    public id:string,
    public username:string,
    public password:string,
    public isDeleted:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router, private auth: AuthService) { }


 
  public createUser(user: User){
    let basicString = this.getAuthHeaders();
    let headers = new HttpHeaders(
      {Authorization: basicString}
    )
    return this.http.post<Alluser[]>('http://localhost:3000/api/users',user, {headers})
    
  }

  public updateuser(id: string, user:update): Observable<User> {
    let basicString = this.getAuthHeaders();
    let headers = new HttpHeaders(
      {Authorization: basicString}
    )
    const base =  this.http.patch<User>(`http://localhost:3000/api/users/${id}`, user, {headers})
    return base
  }

  public deleteUser(id: string): Observable<User> {
    let basicString = this.getAuthHeaders();
    let headers = new HttpHeaders(
      {Authorization: basicString}
    )
    const base =  this.http.delete<User>(`http://localhost:3000/api/users/${id}`, {headers})
    return base
  }

  public getUsers(){
    let basicString = this.getAuthHeaders();
    let headers = new HttpHeaders(
      {Authorization: basicString}
    )
    return this.http.get<User[]>('http://localhost:3000/api/users', {headers})
  }

  public getUser(id:string){
    let basicString = this.getAuthHeaders();
    let headers = new HttpHeaders(
      {Authorization: basicString}
    )
    return this.http.get<User>(`http://localhost:3000/api/users/${id}`, {headers})
  }

 getAuthHeaders(){
      let username='admin'
      let password='123'
      let basicString = 'Basic ' + btoa(username + ':' + password);
      return basicString
    }
}
