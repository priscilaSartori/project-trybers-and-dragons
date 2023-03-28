import Archetypes from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetypes {
  private _energyType: EnergyType;
  private static _instances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._instances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
  
  static createdRacesInstances(): number {
    return Necromancer._instances;
  }
}