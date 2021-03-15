const PaintCan = function (litresOfPaint) {
    this.litresOfPaint = litresOfPaint;
}

PaintCan.prototype.empty = function(){
    this.litresOfPaint = 0;
};

PaintCan.prototype.isEmpty = function(){
    return !this.litresOfPaint;
};

PaintCan.prototype.decreasePaint = function (litres){
    // reduce litres of paint object by area of bedroom painted
    this.litresOfPaint -= litres;
};

module.exports = PaintCan;
