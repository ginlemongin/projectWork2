import { Injectable } from '@angular/core';
import { interfacciaEdificio } from './interfaccia';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
