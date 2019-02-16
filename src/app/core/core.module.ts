import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { PeopleApiService } from './api/people-api.service';
import { PageLoaderService } from './page-loader/page-loader.service';
import { PageLoaderInterceptorService } from './page-loader/page-loader-interceptor.service';

@NgModule({
  providers: [
    PeopleApiService,
    PageLoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: PageLoaderInterceptorService, multi: true }
  ]
})
export class CoreModule { }
