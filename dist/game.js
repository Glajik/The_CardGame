'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hexletPairs = require('hexlet-pairs');

var _hexletPairsData = require('hexlet-pairs-data');

// eslint-disable-line

var run = function run(player1, player2, cards) {
  var iter = function iter(health1, name1, health2, name2, order, log) {
    // BEGIN (write your solution here)
    if (health1 <= 0 || health2 <= 0) {
      var _logItem = (0, _hexletPairs.cons)((0, _hexletPairs.cons)(health1, health2), 'Игра окончена');
      return (0, _hexletPairsData.cons)(_logItem, log);
    }

    var card = (0, _hexletPairsData.random)(cards);
    var cardName = (0, _hexletPairs.car)(card);
    var damage = (0, _hexletPairs.cdr)(card)();

    if (order === 1) {
      var message = '\u0418\u0433\u0440\u043E\u043A \'' + name1 + '\' \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u043B \'' + cardName + '\' \u043F\u0440\u043E\u0442\u0438\u0432 \'' + name2 + '\' \n      \u0438 \u043D\u0430\u043D\u0435\u0441 \u0443\u0440\u043E\u043D \'' + damage + '\'';
      health2 -= damage;
      var _logItem2 = (0, _hexletPairs.cons)((0, _hexletPairs.cons)(health1, health2), message);
      return iter(health1, name1, health2, name2, 2, (0, _hexletPairsData.cons)(_logItem2, log));
    } else {
      var _message = '\u0418\u0433\u0440\u043E\u043A \'' + name2 + '\' \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u043B \'' + cardName + '\' \u043F\u0440\u043E\u0442\u0438\u0432 \'' + name1 + '\' \n      \u0438 \u043D\u0430\u043D\u0435\u0441 \u0443\u0440\u043E\u043D \'' + damage + '\'';
      health1 -= damage;
      var _logItem3 = (0, _hexletPairs.cons)((0, _hexletPairs.cons)(health1, health2), _message);
      return iter(health1, name1, health2, name2, 1, (0, _hexletPairsData.cons)(_logItem3, log));
    }
    // END
  };

  var startHealth = 10;
  var logItem = (0, _hexletPairs.cons)((0, _hexletPairs.cons)(startHealth, startHealth), 'Начинаем бой!');
  return (0, _hexletPairsData.reverse)(iter(startHealth, player1, startHealth, player2, 1, (0, _hexletPairsData.l)(logItem)));
}; // eslint-disable-line

exports.default = function (cards) {
  return function (name1, name2) {
    return run(name1, name2, cards);
  };
};