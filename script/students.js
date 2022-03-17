'use strict';

class Students {
    constructor(name, age, married, score) {
        this._name = name;
        this._age = age;
        this._married = married;
        this._score = score;
    }

    get name() { return this._name; }
    get age() { return this._age; }
    get married() { return this._married; }
    get score() { return this._score; }

    set name(value) { this._name = !value ? 'noname' : value; }
    set age(value) { this._name = 0 > value ? 0 : value; }
    set married(value) { this._married = typeof value === 'boolean' && value ? value : false; }
    set score(value) { this._score = 0 >= value ? 0 : 100 <= value ? 100 : value; }

    info(msg) {
        console.log(`name: ${this.name}, age: ${this.age}, married: ${this.married}, score: ${this.score}, msg: ${msg}`);
    }
}