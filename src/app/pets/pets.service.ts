import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { retry } from 'rxjs/operators/retry';
import { map } from 'rxjs/operators/map';
import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Cat } from './cat/cat';
import { PetOwner } from './internal/pet-owner';
import { OwnerToCatDictionaryConverter } from './internal/owner-to-cat-dictionary-converter';

@Injectable()
export class PetsService {
    constructor(
        private http: HttpClient,
        private converter: OwnerToCatDictionaryConverter
    ) { }

    getCatsGroupedByGender(): Observable<{[gender: string]: Array<Cat> }> {
        return this.http.get<Array<PetOwner>>(`${environment.aglHostName}/people.json`)
                 .pipe(
                     retry(3),
                     map((owners) => this.mapOwnersToCatDictionary(owners)),
                     catchError(this.handleError)
                 );
    }

    private mapOwnersToCatDictionary(petOwners: Array<PetOwner>): {[gender: string]: Array<Cat> } {
        return this.converter.convert(petOwners);
    }

    private handleError(error: HttpErrorResponse): Observable<{[gender: string]: Array<Cat> }> {
        // Should log before returning the error, but ran out of time.
        return new ErrorObservable(
            'An error occurred while trying to fetch the cats. Please try again later.'
        );
    }
}
