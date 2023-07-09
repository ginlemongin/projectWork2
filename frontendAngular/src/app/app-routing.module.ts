import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEdificiComponent } from './lista-edifici/lista-edifici.component';
import { SensoriEdificioComponent } from './sensori-edificio/sensori-edificio.component';

const routes: Routes = [
  { path: 'edifici', component: ListaEdificiComponent },
  { path: 'sensori', component: SensoriEdificioComponent },
  { path: '', redirectTo: '/edifici', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
