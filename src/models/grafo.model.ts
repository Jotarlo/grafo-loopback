import {Nodo} from './nodo.model';

// Clase Grafo con lista de Nodos y lista de Aristas
export class Grafo {
  private __nodos: Nodo[];

  constructor(public nodos: Nodo[]) {
    this.__nodos = nodos;
  }

  get Nodos(): Nodo[] {
    return this.__nodos;
  }

  set Nodos(nodos: Nodo[]) {
    this.__nodos = nodos;
  }

  // agregar nodo
  agregarNodo(nodo: Nodo) {
    this.__nodos.push(nodo);
  }

}
