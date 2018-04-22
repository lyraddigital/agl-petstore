import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { LoaderState } from './loader-state';

@Injectable()
export class PageLoaderService {
    private loaderStateChangeSubject = new Subject<LoaderState>();

    loaderStateChange(): Observable<LoaderState> {
        return this.loaderStateChangeSubject.asObservable();
    }

    start() {
        this.loaderStateChangeSubject.next(LoaderState.Opened);
    }

    stop() {
        this.loaderStateChangeSubject.next(LoaderState.Closed);
    }
}
