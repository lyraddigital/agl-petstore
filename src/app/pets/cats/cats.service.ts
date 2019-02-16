import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { PeopleApiService } from '../../core/api/people-api.service';
import { groupCatsByOwnerGender } from './operator-functions/cat-group-by-gender';
import { CatGroupByOwnerGenderResult } from './models/cat-group-by-owner-gender-result';

@Injectable()
export class CatsService {
  constructor(
    private peopleApiService: PeopleApiService
  ) { }

  getCatsGroupedByGender(): Observable<CatGroupByOwnerGenderResult> {
    return this.peopleApiService.getPeopleFromServer().pipe(
      groupCatsByOwnerGender(),
      catchError(this.handleError)
    );
  }

  private handleError(): Observable<CatGroupByOwnerGenderResult> {
    // Should log before returning the error, but ran out of time.
    return of({ groups: [], succeeded: false });
  }
}
