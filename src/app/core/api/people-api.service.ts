import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { PetOwner } from '../../core/api/models/PetOwner';

@Injectable()
export class PeopleApiService {
  constructor(private http: HttpClient) { }

  getPeopleFromServer(): Observable<Array<PetOwner>> {
    return this.http.get<Array<PetOwner>>(`${environment.aglHostName}/people.json`).pipe(retry(3));
  }
}
