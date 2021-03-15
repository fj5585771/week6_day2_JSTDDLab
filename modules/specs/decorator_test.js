const assert = require('assert');
const Decorator = require('../decorator.js');
const PaintCan = require('../paintCan.js');
const Room = require('../room.js');

describe('Decorator', function (){

    let reece;
    let tartan;
    let duckEgg;
    let yellow;
    let bedroom;
    let stock;

    it("should start with an empty paint stock", function(){
        reece = new Decorator([]);
        actual = reece.stock;
        assert.deepEqual(actual, [])
    });

    it("should be able to add a can to paint stock,", function (){
        reece = new Decorator([]);
        tartan = new PaintCan(5);
        reece.addCanToStock(tartan);
        expected = reece.stockLevel();
        assert.deepStrictEqual(expected, 1)
    });

    it("should be able to calculate total litres paint decorator has in stock", function (){
        reece = new Decorator();
        tartan = new PaintCan(10);
        yellow = new PaintCan(8);
        duckEgg = new PaintCan(12);
        reece.addCanToStock(tartan);
        reece.addCanToStock(yellow);
        reece.addCanToStock(duckEgg);
        const expected = 30;
        actual = reece.canCalculateAmountOfPaint();
        assert.strictEqual(actual, expected);
    });

    it("should be able to calculate whether it has enough paint to paint a room", function () {
        reece = new Decorator();
        tartan = new PaintCan(10);
        yellow = new PaintCan(8);
        duckEgg = new PaintCan(12);
        reece.addCanToStock(tartan);
        reece.addCanToStock(yellow);
        reece.addCanToStock(duckEgg);
        bedroom = new Room(100, false);
        const actual = reece.hasEnoughPaint(bedroom);
        const expected = false;
        assert.deepStrictEqual(actual, expected)
    })

    it("should be able to calculate whether it has enough paint to paint a room", function () {
        reece = new Decorator();
        tartan = new PaintCan(100);
        yellow = new PaintCan(8);
        duckEgg = new PaintCan(12);
        reece.addCanToStock(tartan);
        reece.addCanToStock(yellow);
        reece.addCanToStock(duckEgg);
        bedroom = new Room(100, false);
        const actual = reece.hasEnoughPaint(bedroom);
        const expected = true;
        assert.deepStrictEqual(actual, expected)
    })

    it("should be able to paint room if has enough paint in stock", function (){
        reece = new Decorator();
        tartan = new PaintCan(120);
        bedroom = new Room(100, false);
        reece.addCanToStock(tartan);
        reece.paintRoom(bedroom);
        const actual = bedroom.status;
        assert.deepStrictEqual(actual, true);
    })

    it("should not be able to paint room if not enough paint in stock", function (){
        reece = new Decorator();
        tartan = new PaintCan(80);
        reece.addCanToStock(tartan);
        bedroom = new Room(100, false);
        reece.paintRoom(bedroom);
        const actual = bedroom.status;
        assert.deepStrictEqual(actual, false);
    })

    it("should be able to decrease amount of paint in stock when painting a room", function (){
        bedroom = new Room(100, false);
        reece = new Decorator();
        tartan = new PaintCan(120);
        reece.addCanToStock(tartan);
        reece.paintRoom(bedroom);
        const actual = reece.canCalculateAmountOfPaint()
        assert.deepStrictEqual(actual, 20)
    })

    it("should be able to remove empty paint cans from stock", function () {
        // Given we have a collection of empty paint objects
        reece = new Decorator();
        tartan = new PaintCan(120);
        duckEgg = new PaintCan(300);
        yellow = new PaintCan(250);
        reece.addCanToStock(tartan);
        reece.addCanToStock(duckEgg);
        reece.addCanToStock(yellow);
        duckEgg.empty();
        yellow.empty();
        // When they are removed from stock completely
        reece.emptyStock();
        // Then check our stock object left is one with paint
        const actual = reece.stock;
        assert.deepStrictEqual(actual, [tartan]);
    })

})