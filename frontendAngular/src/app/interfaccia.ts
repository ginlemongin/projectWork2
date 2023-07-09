export interface interfacciaEdificio {
  id:number;
  indirizzo: string;
  dimensioni: string;
  annoCostruzione: number;
}

export interface interfacciaSensore {
  id: number;
  tipo: string;
  datiConsumo: number[];
  dataInstallazione: string;
}
