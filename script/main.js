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

//String literals
console.log(`1 + 2 = ${1 + 2}`);

//equality check
console.log(0 == false);//true
console.log(0 === false);//false
console.log('' == false);//true
console.log('' === false);//false
console.log(null == undefined);//true
console.log(null === undefined);//false

//Function hoisted
testFunction();
function testFunction () {
    console.log('testFunction');
}
//Default Parameters
const showMessage = function(param1, param2 = 'default', param3 = 'default2') {
    console.log(`${param1} ${param2} ${param3}`);
}
showMessage('test1');

//Rest Prameters
const restPram = function(...params) {
    params.forEach(param => console.log(param));
}
restPram('감자에 ', '싹이 나서 ', '잎이 나서');

//Arrow Function
const arrowFunction = (param) => console.log(param);
arrowFunction('testArrow');

//즉시 실행 함수 표현(IIFE, Immediately Invoked Function Expression)
(function IIFEFunction() {
    console.log('IIFEFunction');
})();