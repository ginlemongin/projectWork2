export interface interfacciaEdificio {
  id:number;
  anno_di_costruzione: number;
  indirizzo: string;
  dimensioni: string;
  sensore:interfacciaSensore[];
}

export interface interfacciaSensore {
  id: number;
  tipo_di_sensore: string;
  dati_di_consumo: number[];
  data_di_installazione: string;
}
