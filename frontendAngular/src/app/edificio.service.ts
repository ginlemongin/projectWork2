import { Injectable } from '@angular/core';
import { interfacciaEdificio, interfacciaSensore } from './interfaccia';
import { EDIFICI_MOCK, SENSORI_MOCK } from 'src/mock';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EdificioService {
  private apiUrl = 'http://localhost:8000/api/edifici';


  constructor(private http: HttpClient) {

     }

  getEdifici(): Observable<interfacciaEdificio[]> {
    return this.http.get<interfacciaEdificio[]>(this.apiUrl)

  }

}
