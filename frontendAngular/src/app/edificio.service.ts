import { Injectable } from '@angular/core';
import { interfacciaEdificio } from './interfaccia';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EdificioService {
  private apiUrl = 'http://localhost:8000/api/edifici';

  constructor(private http: HttpClient) {}

  // Ottiene la lista degli edifici tramite una chiamata HTTP GET
  getEdifici(): Observable<interfacciaEdificio[]> {
    return this.http.get<interfacciaEdificio[]>(this.apiUrl);
  }

  // Ottiene i dati di un edificio specifico tramite una chiamata HTTP GET con un ID specifico
  getEdificio(id: number): Observable<interfacciaEdificio> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<interfacciaEdificio>(url);
  }
}

/**
 * I commenti aggiunti spiegano le funzionalità del servizio EdificioService.
 *  Questo servizio utilizza il modulo HttpClient di Angular per effettuare le
 * chiamate HTTP necessarie per ottenere i dati degli edifici. Sono disponibili due metodi:
 * getEdifici(), che recupera l'elenco completo degli edifici, e getEdificio(id),
 * che recupera i dati di un edificio specifico utilizzando un ID come parametro.
 * Entrambi i metodi restituiscono un'istanza di Observable per consentire la
 * gestione asincrona dei dati.
 */
