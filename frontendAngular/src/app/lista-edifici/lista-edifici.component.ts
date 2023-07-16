// Importa le classi e i moduli necessari da Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Importa il servizio EdificioService e l'interfaccia interfacciaEdificio
import { EdificioService } from '../edificio.service';
import { interfacciaEdificio } from '../interfaccia';

@Component({
  selector: 'lista-edifici',
  templateUrl: './lista-edifici.component.html',
  styleUrls: ['./lista-edifici.component.css'],
})
export class ListaEdificiComponent implements OnInit {
  // Array che raccoglie i dati degli edifici
  edifici: interfacciaEdificio[] = [];

  // Dependency injection per il service EdificioService e il router
  constructor(
    private EdificioService: EdificioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Viene chiamato quando il componente viene inizializzato
    // Chiama il metodo getEdifici() per ottenere la lista degli edifici
    this.getEdifici();
  }

  // Metodo per ottenere la lista degli edifici utilizzando il servizio EdificioService
  getEdifici(): void {
    this.EdificioService.getEdifici().subscribe(
      (edifici) => (this.edifici = edifici)
    );
    // Quando viene completata la richiesta, gli edifici ottenuti vengono assegnati all'array this.edifici
  }

  // Metodo per navigare alla pagina di dettaglio di un edificio specifico
  // Riceve come parametro l'oggetto interfacciaEdificio che rappresenta l'edificio selezionato
  goToDetail(edificio: interfacciaEdificio): void {
    // Genera un link con l'URL '/client' seguito dall'ID dell'edificio
    const link = ['/client', edificio.id];
    // Naviga all'URL specificato
    this.router.navigate(link);
  }
}
