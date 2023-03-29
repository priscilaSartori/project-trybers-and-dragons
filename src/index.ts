import Character from './Character';

const player1 = new Character('name1');
const player2 = new Character('name2');
const player3 = new Character('name3');
player1.levelUp();
player1.levelUp();

export default {
  player1, 
  player2,
  player3,
};