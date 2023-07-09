import { Component, OnInit } from '@angular/core';
import { EdificioService } from '../edificio.service';
import { interfacciaEdificio } from '../interfaccia';

@Component({
  selector: 'lista-edifici',
  templateUrl:'./lista-edifici.component.html',
  styleUrls: ['./lista-edifici.component.css']
})
export class ListaEdificiComponent implements OnInit{

  edifici: interfacciaEdificio[] = [];
  edificioSelezionato?: interfacciaEdificio;

  onSelect(edificio: interfacciaEdificio): void {
    this.edificioSelezionato = edificio;
  }

  //dependency injection per il service
  constructor (private EdificioService: EdificioService){

  }
//roba per  il service
  getEdifici(): void {
    this.EdificioService.getEdifici()
        .subscribe(edifici => this.edifici = edifici);
  }

  ngOnInit(): void {
    this.getEdifici();
  }

}

