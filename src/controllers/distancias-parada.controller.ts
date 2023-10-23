import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Distancias,
  Parada,
} from '../models';
import {DistanciasRepository} from '../repositories';

export class DistanciasParadaController {
  constructor(
    @repository(DistanciasRepository)
    public distanciasRepository: DistanciasRepository,
  ) { }

  @get('/distancias/{id}/parada', {
    responses: {
      '200': {
        description: 'Parada belonging to Distancias',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Parada),
          },
        },
      },
    },
  })
  async getParada(
    @param.path.string('id') id: typeof Distancias.prototype._id,
  ): Promise<Parada> {
    return this.distanciasRepository.Destino(id);
  }
}
