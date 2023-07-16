import { Component, OnInit } from '@angular/core';
import { interfacciaEdificio } from '../interfaccia';
import { ActivatedRoute } from '@angular/router';
import { EdificioService } from '../edificio.service';

@Component({
  selector: 'sensori-edificio',
  templateUrl: './sensori-edificio.component.html',
  styleUrls: ['./sensori-edificio.component.css']
})
export class SensoriEdificioComponent {

  edificio!: interfacciaEdificio;

  constructor(
    private route: ActivatedRoute,
    private EdificioService: EdificioService
  ) {}

  ngOnInit(): void {
    // Ottiene l'ID dell'edificio dalla route corrente utilizzando paramMap.get
    const id = +this.route.snapshot.paramMap.get('id')!;
    // Utilizza l'operatore di "non-null assertion" per assicurarsi che paramMap non sia null
    this.getEdificio(id);
  }

  // Ottiene i dati dell'edificio specificato dall'ID tramite una chiamata al servizio EdificioService
  getEdificio(id: number): void {
    this.EdificioService.getEdificio(id)
      .subscribe(edificio => this.edificio = edificio);
  }
}
