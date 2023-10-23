import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Distancias, DistanciasRelations, Parada} from '../models';
import {ParadaRepository} from './parada.repository';

export class DistanciasRepository extends DefaultCrudRepository<
  Distancias,
  typeof Distancias.prototype._id,
  DistanciasRelations
> {

  public readonly Origen: BelongsToAccessor<Parada, typeof Distancias.prototype._id>;

  public readonly Destino: BelongsToAccessor<Parada, typeof Distancias.prototype._id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('ParadaRepository') protected paradaRepositoryGetter: Getter<ParadaRepository>,
  ) {
    super(Distancias, dataSource);
    this.Destino = this.createBelongsToAccessorFor('Destino', paradaRepositoryGetter,);
    this.registerInclusionResolver('Destino', this.Destino.inclusionResolver);
    this.Origen = this.createBelongsToAccessorFor('Origen', paradaRepositoryGetter,);
    this.registerInclusionResolver('Origen', this.Origen.inclusionResolver);
  }
}
