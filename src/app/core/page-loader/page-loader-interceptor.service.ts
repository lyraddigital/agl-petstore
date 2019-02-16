import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { PageLoaderService } from './page-loader.service';

@Injectable()
export class PageLoaderInterceptorService {
  constructor(private pageLoaderService: PageLoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.pageLoaderService.start();

    return next.handle(req).pipe(finalize(() => {
        this.pageLoaderService.stop();
    }));
  }
}
