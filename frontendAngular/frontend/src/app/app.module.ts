import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EdificioDetailComponent } from './edificio-detail/edificio-detail.component';
import { EdificioListComponent } from './edificio-list/edificio-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EdificioDetailComponent,
    EdificioListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
