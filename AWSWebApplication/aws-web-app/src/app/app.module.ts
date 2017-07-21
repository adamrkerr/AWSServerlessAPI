import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdToolbarModule, MdIconModule } from '@angular/material';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { APP_ROUTER_MODULE } from './app.routes';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      MdToolbarModule,
      MdIconModule,
      BrowserAnimationsModule,
      FlexLayoutModule,
      HttpModule,
      APP_ROUTER_MODULE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
