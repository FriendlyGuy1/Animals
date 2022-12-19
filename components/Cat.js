import Animal from './animals.js'

class Cat extends Animal{
    constructor(name,age,legs,fur,whiskers,tail){
        super(name,age)
        this.legs = legs;
        this.fur = fur;
        this.whiskers = whiskers;
        this.tail = tail;
    }

    InfoCards(){
        super.InfoCards();

        const FilledCard = document.querySelector('.Cards' + Animal.i)

        let CardLegs = document.createElement("p")
        CardLegs.innerText = "Legs: " + this.legs
        let CardFur = document.createElement("p")
        CardFur.innerText = "Fur: " + this.fur
        let CardTail = document.createElement("p")
        CardTail.innerText = "Tail: " + this.tail
        let CardWhiskers = document.createElement("p")
        CardWhiskers.innerText = "Whiskers: " + this.whiskers

        FilledCard.append(CardLegs,CardFur,CardTail,CardWhiskers)

    }     
}


export default Cat