const assert = require('assert');
const PaintCan = require('../paintCan.js');

describe('PaintCan', function (){

    it("should have a number of litres of paint", function(){
        const tartan = new PaintCan (5);
        const actual = tartan.litresOfPaint;
        assert.deepEqual(actual, 5)
    })

    it("should be able to check if its empty", function (){
        const tartan = new PaintCan (0);
        const actual = tartan.litresOfPaint;
        assert.deepStrictEqual(actual, 0)
    })

    it("should be able to empty itself of paint", function() {
        const tartan = new PaintCan (5);
        tartan.empty();
        const actual = tartan.litresOfPaint;
        assert.deepStrictEqual(actual, 0)
    })

})