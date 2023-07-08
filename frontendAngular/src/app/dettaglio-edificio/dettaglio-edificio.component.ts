import { Component } from '@angular/core';
import { DettaglioEdificio } from '../dettaglio-edificio';

@Component({
  selector: 'dettaglio-edificio',
  templateUrl:'./dettaglio-edificio.component.html',
  styleUrls: ['./dettaglio-edificio.component.css']
})
export class DettaglioEdificioComponent {
  dettaglioEdificio: DettaglioEdificio = {
    tipo: '',
    datiConsumo: '',
    dataInstallazione: ''
  }
}
