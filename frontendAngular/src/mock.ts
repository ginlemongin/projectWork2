import { interfacciaEdificio } from "./app/interfaccia";
import { interfacciaSensore } from "./app/interfaccia";

export const EDIFICI_MOCK: interfacciaEdificio[] = [
  {
    id:1,
    indirizzo: 'Via Roma 1',
    dimensioni: '1000 mq',
    annoCostruzione: 1990
  },
  {
    id:2,
    indirizzo: 'Piazza Garibaldi 5',
    dimensioni: '750 mq',
    annoCostruzione: 2005
  },
  {
    id:3,
    indirizzo: 'Corso Italia 10',
    dimensioni: '1200 mq',
    annoCostruzione: 1985
  },
  {
    id:4,
    indirizzo: 'Viale Kennedy 8',
    dimensioni: '900 mq',
    annoCostruzione: 2010
  }
];


export const SENSORI_MOCK: interfacciaSensore[] = [
  {
    id: 1,
    tipo: 'Temperatura',
    datiConsumo: [20, 21, 22, 23],
    dataInstallazione: '2022-01-01'
  },
  {
    id: 2,
    tipo: 'Umidità',
    datiConsumo: [40, 42, 39, 41],
    dataInstallazione: '2022-02-15'
  },
  {
    id: 3,
    tipo: 'Luminosità',
    datiConsumo: [800, 850, 900, 950],
    dataInstallazione: '2022-03-10'
  },
  {
    id: 4,
    tipo: 'Pressione',
    datiConsumo: [1005, 1003, 1007, 1004],
    dataInstallazione: '2022-04-20'
  }
];




