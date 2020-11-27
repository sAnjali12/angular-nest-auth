import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


import { RelationService } from '../relation.service'


@Component({
  selector: 'app-createrelation',
  templateUrl: './createrelation.component.html',
  styleUrls: ['./createrelation.component.scss']
})
export class CreaterelationComponent implements OnInit {

  relation: FormGroup;

  constructor( private relationservice: RelationService,
    private router: Router,
    private fb:FormBuilder) { 
      
      this.relation = fb.group({
        userId: ['', Validators.required],
        roleId: ['', Validators.required]
      })
    }

  ngOnInit(): void {
  }

  submitRelation() {

    this.relationservice.createRelation(this.relation.value)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/relation']);
        },
        err => console.log(err)
      )
  }
}
