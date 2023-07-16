import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEdificiComponent } from './lista-edifici/lista-edifici.component';
import { SensoriEdificioComponent } from './sensori-edificio/sensori-edificio.component';

const routes: Routes = [
  { path: '', component: ListaEdificiComponent },
  { path: 'edifici', component: ListaEdificiComponent },
  { path: 'edificio/:id', component: SensoriEdificioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
