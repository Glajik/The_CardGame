import { cons as consPair, car, cdr } from './pairs';

export const cons = (value, list) => consPair(value, list);

export const l = (...args) => {
	if (args.length === 0) return null;
	const list = args.reduceRight((acc, el) => cons(el, acc), null);
	return list;
};

export const head = list => car(list);

export const tail = list => cdr(list);

export const isEmpty = list => list === null;

export const toString = (list) => {
	const recc = (myList) => {
		if (isEmpty(myList)) return '';
		else {
			const comma = isEmpty(tail(myList)) ? '' : ', ';
			return head(myList) + comma + recc(tail(myList));
		}
	}
	return '(' + recc(list) + ')';
};