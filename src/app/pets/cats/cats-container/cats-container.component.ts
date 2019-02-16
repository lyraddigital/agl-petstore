import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CatGroupByOwnerGenderResult } from '../models/cat-group-by-owner-gender-result';
import { CatsService } from '../cats.service';
import { CatGroup } from '../models/cat-group';

@Component({
  selector: 'agl-cats-container',
  templateUrl: './cats-container.component.html',
  styleUrls: ['./cats-container.component.scss']
})
export class CatsContainerComponent implements OnInit {
  catsByGenderResult$: Observable<CatGroupByOwnerGenderResult>;

  constructor(private catsService: CatsService) { }

  ngOnInit() {
    this.catsByGenderResult$ = this.catsService.getCatsGroupedByGender();
  }

  canDisplayGroup(group: CatGroup) {
    return group && group.cats && group.cats.length > 0;
  }
}
