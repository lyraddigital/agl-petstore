import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { PageLoaderContentComponent } from './page-loader/page-loader-content/page-loader-content.component';

@NgModule({
  declarations: [
    PageLoaderContentComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [PageLoaderContentComponent]
})
export class SharedModule { }
