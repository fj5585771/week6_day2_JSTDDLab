
const Room = function (area, status = False) {
    this.area = area;
    this.status = status;
}

Room.prototype.nowPainted = function () {
    this.status = true;
}

module.exports = Room;
