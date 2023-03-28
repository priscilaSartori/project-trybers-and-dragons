import Archetypes from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetypes {
  private _energyType: EnergyType;
  private static _instances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._instances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
  
  static createdRacesInstances(): number {
    return Mage._instances;
  }    
}