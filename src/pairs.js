/* eslint-disable no-unused-vars */
export const cons = (x, y) => f => f(x, y);

export const car = pair => pair((x, y) => x);

export const cdr = pair => pair((x, y) => y);

export const toString = pair => `(${car(pair)}, ${cdr(pair)})`;
