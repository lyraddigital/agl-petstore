import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { PageLoaderService } from './core/page-loader/page-loader.service';
import { LoaderState } from './core/page-loader/models/loader-state';
import { PageLoaderContentComponent } from './shared/page-loader/page-loader-content/page-loader-content.component';

@Component({
  selector: 'agl-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  loaderDialog: MatDialogRef<PageLoaderContentComponent>;

  constructor(private matDialog: MatDialog, private pageLoaderService: PageLoaderService) {
    this.pageLoaderService.loaderStateChange().subscribe(loaderState => {
      if (loaderState === LoaderState.Opened) {
        if (!this.loaderDialog) {
          this.loaderDialog = this.matDialog.open(PageLoaderContentComponent);
          this.loaderDialog.disableClose = true;
        }
      } else if (loaderState === LoaderState.Closed) {
        if (this.loaderDialog) {
          this.loaderDialog.close();
          this.loaderDialog = null;
        }
      }
    });
  }
}
