import { Component, OnInit } from '@angular/core';

import { RelationService } from '../relation.service';
import { Relation } from '../../model/relations.model'


@Component({
  selector: 'app-diactiverelation',
  templateUrl: './diactiverelation.component.html',
  styleUrls: ['./diactiverelation.component.scss']
})
export class DiactiverelationComponent implements OnInit {

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
