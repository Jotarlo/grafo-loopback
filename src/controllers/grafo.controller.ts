import {service} from '@loopback/core';
import {
  get,
  getModelSchemaRef,
  response
} from '@loopback/rest';
import {Grafo} from '../models/grafo.model';
import {GrafoService} from '../services';


export class GrafoController {

  constructor(
    @service(GrafoService)
    private grafoService: GrafoService,
  ) {

  }

  @get('/grafo')
  @response(200, {
    description: 'Obtener y Mostrar grafo por consola de vs code',
    content: {
      'application/json': {
        schema: {
          type: 'Grafo',
          items: getModelSchemaRef(Grafo),
        },
      },
    },
  })
  async ConstruirGrafo(
  ): Promise<Grafo> {
    const grafo = await this.grafoService.crearGrafo();
    this.grafoService.mostrarGrafo(grafo);
    return grafo;
  }
}
