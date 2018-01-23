import { cons, car, cdr, toString as pairToString } from '../sequences/pairs'; // eslint-disable-line
import { cons as consList, l, head, toString as listToString } from '../sequences/pairs-data'; // eslint-disable-line
import { random, reverse } from '../sequences/lists';

const run = (player1, player2, cards, customRandom) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    
    if (health1 <= 0) {
      const scores = order === 1 ? cons(health1, health2) : cons(health2, health1);
      const message = `Игра окончена! Победил игрок ${name2}!`;
      const logItem = cons(scores, message);
      return consList(logItem, log);
    }

    const card = customRandom(cards);
    const cardName = car(card);
    const damage = cdr(card)(health2);
  
		const newHealth = health2 - damage;
		const scores = order === 1 ? cons(health1, newHealth) : cons(newHealth, health1);
		const message = `Игрок ${name1} применил ${cardName} и нанес игроку ${name2} урон ${damage}`;
		const logItem = cons(scores, message);
    return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, consList(logItem, log));
  };

  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default (cards, customRandom) =>
  (player1, player2) =>
    run(player1, player2, cards, customRandom);
