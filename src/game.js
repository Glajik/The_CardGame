import { cons, car, cdr, toString as pairToString } from './pairs'; // eslint-disable-line
import { cons as consList, l, head, toString as listToString } from './pairs-data'; // eslint-disable-line
import { random, reverse } from './list';

const run = (player1, player2, cards) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    // BEGIN (write your solution here)
    if (health1 <= 0 || health2 <= 0) {
      const logItem = cons(cons(health1, health2), 'Игра окончена');
      return consList(logItem, log);
    }

    const card = random(cards);
    const cardName = car(card);
    const damage = cdr(card)();
  
    if (order === 1) {
      const message = `Игрок '${name1}' применил '${cardName}' против '${name2}' 
      и нанес урон '${damage}'`;
      health2 -= damage;
      const logItem = cons(cons(health1, health2), message);
      return iter(health1, name1, health2, name2, 2, consList(logItem, log));
    } else {
      const message = `Игрок '${name2}' применил '${cardName}' против '${name1}' 
      и нанес урон '${damage}'`;
      health1 -= damage;
      const logItem = cons(cons(health1, health2), message);
      return iter(health1, name1, health2, name2, 1, consList(logItem, log));
    }
    // END
  };

  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default cards =>
  (name1, name2) =>
    run(name1, name2, cards);
