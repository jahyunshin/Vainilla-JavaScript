'use strict';

class Shape {
    constructor(width, height, color) {
        this._width = width;
        this._height = height;
        this._color = color;
    }

    get width() { return this._width; }
    get height() { return this._height; }
    get color() { return this._color; }

    set width(value) { this._width = 0 > value ? 0 : value; }
    set height(value) { this._height = 0 > value ? 0 : value; }
    set color(value) { this._color = 0 > value ? 0 : value; }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    getArea() {
        return this.width * this.height / 2;
    }
}