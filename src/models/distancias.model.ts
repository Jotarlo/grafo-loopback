import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Parada} from './parada.model';

@model()
export class Distancias extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'number',
    required: true,
  })
  Metros: number;

  @belongsTo(() => Parada, {name: 'Origen'})
  IdOrigen: string;

  @belongsTo(() => Parada, {name: 'Destino'})
  IdDestino: string;

  constructor(data?: Partial<Distancias>) {
    super(data);
  }
}

export interface DistanciasRelations {
  // describe navigational properties here
}

export type DistanciasWithRelations = Distancias & DistanciasRelations;
