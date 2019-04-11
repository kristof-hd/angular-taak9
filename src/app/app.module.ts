import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersoonService } from './persoon.service';
import { PersoonDetailsComponent } from './persoon-details/persoon-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PersoonDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PersoonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
