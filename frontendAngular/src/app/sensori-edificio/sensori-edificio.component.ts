import { Component,OnInit } from '@angular/core';
import { interfacciaEdificio} from '../interfaccia';
import { ActivatedRoute } from '@angular/router';
import { EdificioService } from '../edificio.service';

@Component({
  selector: 'sensori-edificio',
  templateUrl: './sensori-edificio.component.html',
  styleUrls: ['./sensori-edificio.component.css']
})
export class SensoriEdificioComponent {

  edificio!: interfacciaEdificio;

  constructor (

    private route: ActivatedRoute,
    private EdificioService: EdificioService

    ){
  }

    /* quando questo componente viene inizializzato ottiene l'id del
    cliente dalla rotta corrente tramite mapParam.get.
    Il + converte l' id in number altrimenti quando lo passeresti come stringa
    */
    ngOnInit(): void {
      const id = +this.route.snapshot.paramMap.get('id')!;
      // usiamo l'operatore di "non-null assertion" per assicurarci che paramMap non sia null
      this.getEdificio(id);
    }

    // fa la chiamata all'url con uno specifico id per visualizzare i dati di quel cliente
  getEdificio(id: number): void {
    this.EdificioService.getEdificio(id)
      .subscribe (edificio => this.edificio = edificio);
  }
}

