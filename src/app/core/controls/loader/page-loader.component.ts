import { Component, OnInit } from '@angular/core';

import { PageLoaderService } from './page-loader.service';
import { LoaderState } from './loader-state';

@Component({
  selector: 'app-page-loader',
  templateUrl: './page-loader.component.html',
  styleUrls: ['./page-loader.component.scss']
})
export class PageLoaderComponent implements OnInit {
  canShow = false;

  constructor(private pageLoaderService: PageLoaderService) { }

  ngOnInit() {
    this.pageLoaderService.loaderStateChange().subscribe((state) => {
      if (state && state === LoaderState.Opened) {
        this.canShow = true;
      } else {
        this.canShow = false;
      }
    });
  }
}
