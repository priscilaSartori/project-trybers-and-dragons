import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

export default class PVE extends Battle {
  private _character: Fighter;
  private _monsters: [Fighter | SimpleFighter];
  constructor(character: Fighter, monster: [Fighter | SimpleFighter]) { 
    super(character);
    this._character = character;
    this._monsters = monster; 
  }
}