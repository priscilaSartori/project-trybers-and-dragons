export default abstract class Race {
  private _name: string;
  private _dexterity: number;
  
  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }
}