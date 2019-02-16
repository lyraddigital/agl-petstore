import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';

import { CatsService } from './cats/cats.service';
import { CatsContainerComponent } from './cats/cats-container/cats-container.component';
import { CatGroupComponent } from './cats/cat-group/cat-group.component';

@NgModule({
  declarations: [
    CatsContainerComponent,
    CatGroupComponent
  ],
  providers: [
    CatsService
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatExpansionModule,
    MatListModule
  ],
  exports: [
    CatsContainerComponent
  ]
})
export class PetsModule { }
