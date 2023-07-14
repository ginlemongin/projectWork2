import { Component } from '@angular/core';
import { interfacciaSensore } from '../interfaccia';

@Component({
  selector: 'sensori-edificio',
  templateUrl: './sensori-edificio.component.html',
  styleUrls: ['./sensori-edificio.component.css']
})
export class SensoriEdificioComponent {

  sensori: interfacciaSensore[] = [];


}
