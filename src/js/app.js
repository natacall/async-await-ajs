import json from './parser';
import read from './reader';
import GameSaving from './gameSaving';

let save = new GameSaving();
const gameSave = (async () => {
  try {
    const readResolve = await read();
    const saving = await json(readResolve);
    save = JSON.parse(saving);
    return save;
  } catch (error) {
    throw new Error('Ошибочка!');
  }
})();

export default gameSave;
