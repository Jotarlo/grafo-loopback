import {Nodo} from './nodo.model';

// clase Arista para tener el nodo y el peso
export class Arista {
  __nodo: Nodo;
  __peso: number;
  constructor(public nodo: Nodo, public peso: number) {
    this.__nodo = nodo;
    this.__peso = peso;
  }

  get Nodo(): Nodo {
    return this.__nodo;
  }

  set Nodo(nodo: Nodo) {
    this.__nodo = nodo;
  }

  get Peso(): number {
    return this.__peso;
  }

  set Peso(peso: number) {
    this.__peso = peso;
  }

}
