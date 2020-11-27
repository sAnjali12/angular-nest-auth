import { Component, OnInit } from '@angular/core';

import { RelationService } from '../relation.service';
import { Relation } from '../../model/relations.model'

@Component({
  selector: 'app-activerelation',
  templateUrl: './activerelation.component.html',
  styleUrls: ['./activerelation.component.scss']
})
export class ActiverelationComponent implements OnInit {

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

}
