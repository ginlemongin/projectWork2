import { Component } from '@angular/core';
import { ListaEdifici } from '../lista-edifici';

@Component({
  selector: 'lista-edifici',
  templateUrl:'./lista-edifici.component.html',
  styleUrls: ['./lista-edifici.component.css']
})
export class ListaEdificiComponent {
  listaEdifici: ListaEdifici = {
    indirizzo: '',
    dimensioni: '',
    annoCostruzione: 0
  }
}
