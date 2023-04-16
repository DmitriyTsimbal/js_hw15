// Поля:
// Масив імен хлопців
// Масив імен дівчат
// Методи:
// Метод випадкового вибору імені хлопця
// Метод випадкового вибору імені дівчини
// Метод виведення пари для танців
// Метод run, який ініціює через кожні 5 секунд виведення нової пари для танців

const BOYS_NAMES = ["Adam", "Benjamin", "Christopher", "David", "Edward", "Frank", "George", "Henry", "Ian", "Jacob"];
const GIRLS_NAMES = ["Amanda", "Bethany", "Caroline", "Danielle", "Emily", "Fiona", "Grace", "Hannah", "Isabella", "Jasmine"]

class DanceDirector {

    static pairDancingCounter = 1;

    constructor(boysNames, girlsNames) {
        this.boysNames = boysNames;
        this.girlsNames = girlsNames;
    }

    getRandomIndex(arr) {
        return Math.floor(Math.random() * arr.length)
    }

    getRandomBoyName() {
        let random = this.getRandomIndex(this.boysNames);
        return this.boysNames[random]
    }

    getRandomGirlName() {
        let random = this.getRandomIndex(this.girlsNames)
        return this.girlsNames[random]
    }

    toString() {
        const pairDiv = document.createElement(`div`)
        pairDiv.innerHTML = `Pair №${ DanceDirector.pairDancingCounter }: ${ this.getRandomBoyName() } and ${ this.getRandomGirlName() }<br>`
        return pairDiv
    }

    run() {
        document.body.appendChild(this.toString())
        DanceDirector.pairDancingCounter++;
        setInterval(() => {
            document.body.appendChild(this.toString())
            DanceDirector.pairDancingCounter++;
        }, 5000)
    }
}


let dance = new DanceDirector(BOYS_NAMES, GIRLS_NAMES)
dance.run()