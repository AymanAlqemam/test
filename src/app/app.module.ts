import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// import { PdfmakeModule } from 'ng-pdf-make/index';

@ NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // PdfmakeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
