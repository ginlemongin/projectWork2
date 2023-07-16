export interface interfacciaEdificio {
  id: number;                       // Identificatore univoco dell'edificio
  anno_di_costruzione: number;      // Anno di costruzione dell'edificio
  indirizzo: string;                // Indirizzo dell'edificio
  dimensioni: string;               // Dimensioni dell'edificio
  sensore: interfacciaSensore[];    // Array dei sensori presenti nell'edificio
}

export interface interfacciaSensore {
  id: number;                       // Identificatore univoco del sensore
  tipo_di_sensore: string;          // Tipo di sensore (es. temperatura, umidità, etc.)
  dati_di_consumo: number[];        // Array dei dati di consumo del sensore
  data_di_installazione: string;    // Data di installazione del sensore
}
