import {Entity, model, property} from '@loopback/repository';

@model()
export class Parada extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
  })
  Latitud?: string;

  @property({
    type: 'string',
  })
  Longitud?: string;

  @property({
    type: 'string',
    required: true,
  })
  Clave: string;


  constructor(data?: Partial<Parada>) {
    super(data);
  }
}

export interface ParadaRelations {
  // describe navigational properties here
}

export type ParadaWithRelations = Parada & ParadaRelations;
