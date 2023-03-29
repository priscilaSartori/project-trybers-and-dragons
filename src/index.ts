import Character from './Character';
import Monster from './Monster';

const player1 = new Character('name1');
const player2 = new Character('name2');
const player3 = new Character('name3');
player1.levelUp();
player1.levelUp();

const monster1 = new Monster();

export default {
  player1, 
  player2,
  player3,
  monster1,
};