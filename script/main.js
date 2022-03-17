'use strict';

//https://developer.mozilla.org/ko/docs/Web/JavaScript

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

//Class
const studentAkadow = new Students('akadow', 40, true, 99);
studentAkadow.name = '';
studentAkadow.married = false;
console.log(studentAkadow);

const triangle = new Triangle(30, 50, 'red');
console.log(triangle.getArea());

console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);

//Object Control
const testFunction220316 = function(param1, param2, param3 = 'default') {
    return {first: param1, second: param2, third: param3};
}
const testObject220316 = testFunction220316(1, 2, 33);
delete testObject220316.second;
delete testObject220316['third'];
console.log(testObject220316);

//Property value shorthand
function defaultObject220316_001(param1, param2 = 'default') {
    return {
        param1,
        param2,
    }
}
const testObject220316_002 = new defaultObject220316_001(11, 22);
console.log(testObject220316_002);

//Constructor function
function defaultObject220316_003(param1, param2, param3 = 'default') {
    //this = {};
    this.param1 = param1;
    this.param2 = param2;
    this.param3 = param3;
    //return this;
}
const testObject220316_003 = new defaultObject220316_003(111, 222, 333);
console.log(testObject220316_003.param3);
console.log('param2' in testObject220316_003);

// Assign
const testObject220316_004 = Object.assign({}, testObject220316_002, testObject220316_003);
console.log(testObject220316_004);
const testObject220316_005 = Object.assign(testObject220316_003, testObject220316_002);
console.log(testObject220316_005);

//Array, forEach
const fruits220317_001 = new Array('banana', 'apple', 'peach');
fruits220317_001.push('grape');
console.log('fruits220317_001.includes(\'grape\'): ' + fruits220317_001.includes('grape'));

fruits220317_001.forEach(function (fruits, index, fruits220317_001){
    console.log(`fruits: ${fruits} index: ${index} fruits220317_001: ${fruits220317_001}`);
});

const arrayStudents = new Array( new Students('akadow', 40, true, 99)
                               , new Students('ishmael', 38, true, 88)
                               , new Students('ryan', 39, true, 77)
                               );

//find
const findStudent = arrayStudents.find((student) => student.age === 38);
console.log(findStudent);

//reduce
arrayStudents.reduce((previousValue, currentValue, currentIndex, array) => {
    console.log(`previousValue.name: ${previousValue.name}, currentValue.name: ${currentValue.name}, currentIndex: ${currentIndex}, array.length: ${array.length}`);
    return currentValue;//next previousValue
}).info('final student.');

//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const totalScore = arrayStudents.reduce((previousValue, currentValue, currentIndex, array) => previousValue + currentValue.score, 0);
console.log(`totalScore: ${totalScore}`);

//sort (order by age ascending)
arrayStudents.sort((previous, current) => previous.score - current.score)
             .forEach((student) => student.info('order by age ascending'));

