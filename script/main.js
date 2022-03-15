'use strict';

const hello = 'hello';
const helloHello = `hello ${hello}`;
console.log(helloHello);

const num210315 = 210315;
console.log(`num210315 typeof: ${typeof num210315}, value: ${num210315}`);

//big int (-2**53 ~ 2**53) (Chrome, FireFox)
const bigInt1234567890N5 = 12345678901234567890123456789012345678901234567890n;
console.log(`bigInt1234567890N5 typeof: ${typeof bigInt1234567890N5}, value: ${bigInt1234567890N5}`);

const null210315 = null;
console.log(`null210315 typeof: ${typeof null210315}, value: ${null210315}`);

let undefined210315;
console.log(`undefined210315 typeof: ${typeof undefined210315}, value: ${undefined210315}`);

// unique identifiers
const symbol210315_1 = Symbol('test');
const symbol210315_2 = Symbol('test');
console.log(symbol210315_1 === symbol210315_2);
console.log(`typeof: ${typeof symbol210315_1} ${symbol210315_1.description} === ${symbol210315_2.description}`);

const symbol210315_3 = Symbol.for('test');
const symbol210315_4 = Symbol.for('test');
console.log(symbol210315_3 === symbol210315_4);