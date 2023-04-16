//Створити об’єкт «Авто».
//Поля(властивості):
// Марка
// Розмір бака
// Кількість наявних літрів
// Кількість місць
// Кількість пасажирів
// Методи (дії):
// Заправка на вказану кількість літрів
// Виведення кількості пасажирів
// Додавання пасажирів
// Висадка пасажирів


function Auto(model, tankCapacity, availableLiters, placesCount, passengersCount) {
    this.model = model;
    this.tankCapacity = tankCapacity;
    this.availableLiters = availableLiters;
    this.placesCount = placesCount;
    this.passengersCount = passengersCount;
}

Auto.prototype.refuelingSpecifiedLitersNum = function (liters) {
    if (liters + this.availableLiters > this.tankCapacity)
        throw new Error('The liters should be less than the tank volume')
    this.availableLiters += liters;
}

Auto.prototype.toString = function () {
    return `${ this.passengersCount } <br>`
}

Auto.prototype.addPassengers = function (passengersCount) {
    if (passengersCount + this.passengersCount > this.placesCount)
        throw new Error('There can\'t be more passengers than seats');
    this.passengersCount += passengersCount
}

Auto.prototype.takeAwayPassengers = function (passengersCount) {
    if (this.passengersCount < passengersCount)
        throw new Error('You cannot remove more passengers than you already have');
    this.passengersCount -= passengersCount
}


let auto1 = new Auto('Audi', 100, 12, 10, 3);
let auto2 = new Auto('BMW', 80, 10, 6,1)

auto1.refuelingSpecifiedLitersNum(18)
console.log(auto1)
auto1.addPassengers(4)
console.log(auto1)
auto1.takeAwayPassengers(2)
console.log(auto1)

document.write(`Passengers count: ${auto1}`)


auto2.refuelingSpecifiedLitersNum(18)
console.log(auto2)
auto2.addPassengers(4)
console.log(auto2)
auto2.takeAwayPassengers(2)
console.log(auto2)

document.write(`Passengers count: ${auto2}`)



