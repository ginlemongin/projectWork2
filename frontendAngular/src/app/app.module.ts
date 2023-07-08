import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEdificiComponent } from './lista-edifici/lista-edifici.component';
import { DettaglioEdificioComponent } from './dettaglio-edificio/dettaglio-edificio.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEdificiComponent,
    DettaglioEdificioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
