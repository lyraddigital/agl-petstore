import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators';

import { PageLoaderService } from '../controls/loader/page-loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private _pageLoader: PageLoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._pageLoader.start();

    return next.handle(req).pipe(finalize(() => {
        this._pageLoader.stop();
    }));
  }
}
