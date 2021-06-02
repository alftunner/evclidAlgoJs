//Task1
let auto = {
    madeIn : "Россия",
    model : "Говно",
    year: 1995,
    averageSpeed: 50
}
auto.Print = function () {
    alert('Сделано в ' + auto.madeIn + '; Модель ' + auto.model + '; Год выпуска ' + auto.year + '; Средняя скорость ' + auto.averageSpeed + ' км.ч');
}
auto.timeCalc = function (way) {
    let time = way / this.averageSpeed;
    time = time + Math.floor(time/4);
    alert(time);
}

//Task2
function Fraction (numerator, dominator) {
    this.numerator = numerator;
    this.dominator = dominator;
    this.Addition = function (Fraction2) {
        let dominators = this.dominator * Fraction2.dominator;
        let numerators = this.numerator * Fraction2.dominator + Fraction2.numerator * this.dominator;
        return numerators + '/' + dominators;
    }
    this.Subtraction = function (Fraction2) {
        let dominators = this.dominator * Fraction2.dominator;
        let numerators = this.numerator * Fraction2.dominator - Fraction2.numerator * this.dominator;
        return numerators + '/' + dominators;
    }
    this.Multiplication = function (Fraction2) {
        let dominators = this.dominator * Fraction2.dominator;
        let numerators = this.numerator * Fraction2.numerator;
        return numerators + '/' + dominators;
    }
    this.Division = function (Fraction2) {
        let dominators = this.dominator * Fraction2.numerator;
        let numerators = this.numerator * Fraction2.dominator;
        return numerators + '/' + dominators;
    }
    this.Reduction = function () {
        let biggestDivider = this.biggestDivider(this.numerator, this.dominator);
        return this.numerator/biggestDivider + '/' + this.dominator/biggestDivider;
    }
    this.biggestDivider = function (a, b) {
        return b ? this.biggestDivider(b, a % b) : a;
    }
}
