const Room = require('../room.js');
const assert = require('assert');

describe('Room', function () {

    it("should have an area in square meters", function() {  
        const bedroom = new Room (10, false)
        const area = bedroom.area;
        assert.deepEqual(area, 10)    // there is no event taking place for the initial unit test, so no WHEN is necessary 
    })

    it("should start not painted", function (){
        const bedroom = new Room (10, false)
        const notPainted = bedroom.status;
        assert.strictEqual(notPainted, false)
    })

    it("should be able to be painted", function (){
        const bedroom = new Room(10, true)
        const painted = bedroom.status;
        assert.strictEqual(painted, true)
    })
})
