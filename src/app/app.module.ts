import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Numero48Component } from './numero48/numero48.component';
import { Numero49Component } from './numero49/numero49.component';

@NgModule({
  declarations: [
    AppComponent,
    Numero48Component,
    Numero49Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
