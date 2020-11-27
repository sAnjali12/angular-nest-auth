import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Router } from '@angular/router';

import { Relation, Allrelation } from '../model/relations.model'
import { AuthService } from '../auth.service'

@Injectable({
  providedIn: 'root'
})
export class RelationService {

  constructor(private http: HttpClient, private router: Router, private auth: AuthService) { }


 
  public createRelation(relation: Relation){
    let basicString = this.getAuthHeaders();
    let headers = new HttpHeaders(
      {Authorization: basicString}
    )
    return this.http.post<Allrelation[]>('http://localhost:3000/api/relations',relation, {headers})
    
  }

  public updateRelation(id: string): Observable<Relation> {
    let basicString = this.getAuthHeaders();
    let headers = new HttpHeaders(
      {Authorization: basicString}
    )
    const base =  this.http.post<Relation>(`http://localhost:3000/api/relations/${id}`, {headers})
    return base
  }

  public deleteRelation(id: string): Observable<Relation> {
    let basicString = this.getAuthHeaders();
    let headers = new HttpHeaders(
      {Authorization: basicString}
    )
    const base =  this.http.delete<Relation>(`http://localhost:3000/api/relations/${id}`, {headers})
    return base
  }

  public getRelations(){
    let basicString = this.getAuthHeaders();
    let headers = new HttpHeaders(
      {Authorization: basicString}
    )
    return this.http.get<Relation[]>('http://localhost:3000/api/relations', {headers})
  }

 getAuthHeaders(){
      let username='admin'
      let password='123'
      let basicString = 'Basic ' + btoa(username + ':' + password);
      return basicString
    }
}
