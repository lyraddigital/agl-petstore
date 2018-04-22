import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { PetsModule } from './pets/pets.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    CoreModule,
    PetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
