import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Router } from '@angular/router';

import { Role, Allrole } from '../model/role.model'
import { AuthService } from '../auth.service'

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient, private router: Router, private auth: AuthService) { }


 
  public createRole(role: Role){
    let basicString = this.getAuthHeaders();
    let headers = new HttpHeaders(
      {Authorization: basicString}
    )
    return this.http.post<Allrole[]>('http://localhost:3000/api/roles',role, {headers})
    
  }

  public updateRole(id: string, role: Allrole): Observable<Role> {
    let basicString = this.getAuthHeaders();
    let headers = new HttpHeaders(
      {Authorization: basicString}
    )
    const base =  this.http.post<Role>(`http://localhost:3000/api/roles/${id}`, role, {headers})
    return base
  }

  public deleteRole(id: string): Observable<Role> {
    let basicString = this.getAuthHeaders();
    let headers = new HttpHeaders(
      {Authorization: basicString}
    )
    const base =  this.http.delete<Role>(`http://localhost:3000/api/roles/${id}`, {headers})
    return base
  }

  public getRoles(){
    let basicString = this.getAuthHeaders();
    let headers = new HttpHeaders(
      {Authorization: basicString}
    )
    return this.http.get<Role[]>('http://localhost:3000/api/roles', {headers})
  }

  public getRole(id: string){
    let basicString = this.getAuthHeaders();
    let headers = new HttpHeaders(
      {Authorization: basicString}
    )
    return this.http.get<Role>(`http://localhost:3000/api/roles/${id}`, {headers})
  } 
 getAuthHeaders(){
      let username='admin'
      let password='123'
      let basicString = 'Basic ' + btoa(username + ':' + password);
      return basicString
    }
}
