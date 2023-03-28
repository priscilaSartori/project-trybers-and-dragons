import Archetypes from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetypes {
  private _energyType: EnergyType;
  static _instances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._instances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
  
  static createdArchetypeInstances(): number {
    return this._instances;
  }
}