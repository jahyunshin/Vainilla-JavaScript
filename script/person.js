'use strict';

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = 0 > value ? 0 : value;
    }

    speak() {
        console.log(`${this.name} ${this.age} hello!`);
    }
}