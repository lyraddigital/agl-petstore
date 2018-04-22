import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { PageLoaderService } from './controls/loader/page-loader.service';
import { LoaderInterceptor } from './http/loader-interceptor';
import { PageLoaderComponent } from './controls/loader/page-loader.component';

@NgModule({
  declarations: [ PageLoaderComponent ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    PageLoaderComponent
  ],
  providers: [
    PageLoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ]
})
export class CoreModule { }
