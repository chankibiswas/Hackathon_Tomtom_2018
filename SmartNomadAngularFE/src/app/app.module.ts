import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapdisplayComponent } from './mapdisplay/mapdisplay.component';

@NgModule({
  declarations: [
    AppComponent,
    MapdisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
