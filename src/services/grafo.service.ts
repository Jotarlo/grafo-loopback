import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {Arista} from '../models/arista.model';
import {Grafo} from '../models/grafo.model';
import {Nodo} from '../models/nodo.model';
import {DistanciasRepository, ParadaRepository} from '../repositories';

@injectable({scope: BindingScope.TRANSIENT})
export class GrafoService {
  constructor(
    @repository(ParadaRepository)
    private paradaRepository: ParadaRepository,
    @repository(DistanciasRepository)
    private distanciasRepository: DistanciasRepository,
  ) { }

  /*
   * Add service methods here
   */

  // metodo para crear el grafo con las paradas leidas de la base de datos
  async crearGrafo(): Promise<Grafo> {
    // se obtienen las paradas de la base de datos
    const paradas = await this.paradaRepository.find();
    // se crea el grafo
    const grafo = new Grafo([]);
    // se recorren las paradas
    for (const parada of paradas) {

      // leer las distancias de la base de datos para crear las aristas
      // se obtienen las distancias de la base de datos
      const distancias = await this.distanciasRepository.find(
        {
          where: {
            IdOrigen: parada._id
          }
        },
      );

      // crear las aristas con las distancias leidas de la base de datos
      const aristas = [];
      // se recorren las distancias
      for (const distancia of distancias) {
        const vecino = await this.paradaRepository.findById(distancia.IdDestino);
        // crear el nodo vecino
        const nodoVecino = new Nodo(vecino._id!, vecino.Clave!, vecino.Nombre!, []);

        const arista = new Arista(nodoVecino, distancia.Metros!);
        // se agrega la arista al arreglo de aristas
        aristas.push(arista);
      }

      // se crea el nodo
      let nodo: Nodo = new Nodo(parada._id!, parada.Clave!, parada.Nombre!, aristas);
      // se agrega el nodo al grafo
      grafo.agregarNodo(nodo);
    }

    return grafo;
  }


  // Método para mostrar el grafo por consola
  mostrarGrafo(grafo: Grafo) {
    console.log('Grafo:');
    for (const nodo of grafo.Nodos) {
      console.log('Nodo: ' + nodo.Nombre);
      for (const arista of nodo.Aristas) {
        console.log('Arista: ' + arista.Nodo.Nombre + ' Peso: ' + arista.Peso);
      }
    }
  }

}
