import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Parada, ParadaRelations} from '../models';

export class ParadaRepository extends DefaultCrudRepository<
  Parada,
  typeof Parada.prototype._id,
  ParadaRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Parada, dataSource);
  }
}
