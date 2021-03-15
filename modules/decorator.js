const Decorator = function () {
    this.stock = []
}

Decorator.prototype.stockLevel = function(){
    return this.stock.length;
}

Decorator.prototype.addCanToStock = function (paintCan){
  this.stock.push(paintCan);
};

Decorator.prototype.canCalculateAmountOfPaint = function(){
    let total = 0;

    for (let paintCan of this.stock){
        total += paintCan.litresOfPaint;
    }

    return total;
};

Decorator.prototype.hasEnoughPaint = function(bedroom){
    let result;

    if (this.canCalculateAmountOfPaint() >= bedroom.area) {
        result = true;
    } else {
        result = false;
    }

    return result;
};

Decorator.prototype.paintRoom = function (bedroom){
    if(!this.hasEnoughPaint(bedroom)){
        return;
    } else {

        bedroom.nowPainted();
        this.reducePaintStock(bedroom);
    };
};

Decorator.prototype.reducePaintStock = function (bedroom){ 
    let areaToPaint = bedroom.area;

    for (let paintCan of this.stock){
        if (paintCan.litresOfPaint >= areaToPaint){
            paintCan.decreasePaint(areaToPaint);
            // areaToPaint = 0;
        } else {
            areaToPaint -= paintCan.litresOfPaint;
            paintCan.empty();
        } 
    };
};

Decorator.prototype.emptyStock = function () {
    const stillGotPaint = [];

    for (let paintCan of this.stock) {
        if (!paintCan.isEmpty()){
            stillGotPaint.push(paintCan);
        }
    }
    this.stock = stillGotPaint;
};

module.exports = Decorator;