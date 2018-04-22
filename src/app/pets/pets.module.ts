import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';

import { PetsService } from './pets.service';
import { CatsContainerComponent } from './cat/cats-container.component';
import { CatGroupComponent } from './cat/cat-group.component';
import { OwnerToCatDictionaryConverter } from './internal/owner-to-cat-dictionary-converter';

@NgModule({
  declarations: [
    CatGroupComponent,
    CatsContainerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatDividerModule,
    MatExpansionModule,
    MatListModule
  ],
  exports: [
    CatsContainerComponent
  ],
  providers: [
    OwnerToCatDictionaryConverter,
    PetsService
  ]
})
export class PetsModule { }
