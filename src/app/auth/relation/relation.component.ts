import { Component, OnInit } from '@angular/core';

import { RelationService } from './relation.service'
import { Relation} from '../model/relations.model'

@Component({
  selector: 'app-relation',
  templateUrl: './relation.component.html',
  styleUrls: ['./relation.component.scss']
})
export class RelationComponent implements OnInit {

  constructor(private relationService: RelationService) { }

  relation: Relation[]=[];

  ngOnInit(){
    this.getAll()
  }

  getAll(): void {
    this.relationService.getRelations()
    .subscribe(
    res => this.relation = res,
    err => console.log(err)
    )
  }

  deleterelation(id:string): void {
    alert("Hello.. are you sure for!!");
    this.relationService.deleteRelation(id)
      .subscribe(
        res => {
          console.log(res);
          this.getAll();
        },
        err => console.log(err)
      )
  }
}
