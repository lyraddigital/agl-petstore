import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { LoaderState } from './models/loader-state';

@Injectable()
export class PageLoaderService {
  private loaderStateChangeSubject = new Subject<LoaderState>();

    loaderStateChange(): Observable<LoaderState> {
        return this.loaderStateChangeSubject.asObservable();
    }

    start(): void {
        this.loaderStateChangeSubject.next(LoaderState.Opened);
    }

    stop(): void {
        this.loaderStateChangeSubject.next(LoaderState.Closed);
    }
}
