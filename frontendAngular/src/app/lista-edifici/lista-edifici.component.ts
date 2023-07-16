import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EdificioService } from '../edificio.service';
import { interfacciaEdificio } from '../interfaccia';

@Component({
  selector: 'lista-edifici',
  templateUrl: './lista-edifici.component.html',
  styleUrls: ['./lista-edifici.component.css'],
})
export class ListaEdificiComponent implements OnInit {
  //array che raccoglie i dati degli edifici
  edifici: interfacciaEdificio[] = [];

  //dependency injection per il service
  constructor(
    private EdificioService: EdificioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEdifici();
  }

  // per  il service
  getEdifici(): void {
    this.EdificioService.getEdifici().subscribe(
      (edifici) => (this.edifici = edifici)
    );
  }

  // genera il link per andare all'url con l'id che fa la chiamata get del singolo cliente
  goToDetail(edificio: interfacciaEdificio): void {
    const link = ['/client', edificio.id];
    this.router.navigate(link);
  }
}
