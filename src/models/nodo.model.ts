import {Arista} from './arista.model';

export class Nodo {

  __id: string;
  __nombre: string;
  __clave: string;
  __aristas: Arista[];

  constructor(public id: string, public clave: string, public nombre: string, public aristas: Arista[]) {
    this.__id = id;
    this.__nombre = nombre;
    this.__clave = clave;
    this.__aristas = aristas;
  }

  get Id(): string {
    return this.__id;
  }

  set Id(id: string) {
    this.__id = id;
  }

  get Nombre(): string {
    return this.__nombre;
  }

  set Nombre(nombre: string) {
    this.__nombre = nombre;
  }

  get Clave(): string {
    return this.__clave;
  }

  set Clave(clave: string) {
    this.__clave = clave;
  }

  get Aristas(): Arista[] {
    return this.__aristas;
  }

  set Aristas(aristas: Arista[]) {
    this.__aristas = aristas;
  }

  // agregar arista
  agregarArista(arista: Arista) {
    this.__aristas.push(arista);
  }


}
