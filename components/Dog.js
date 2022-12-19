import Animal from './animals.js'

class Dog extends Animal{
    constructor(name, age, legs, fur,tail,muzzle){
        super(name, age);
        this.legs = legs;
        this.fur = fur;
        this.tail = tail;
        this.muzzle = muzzle
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
        let CardMuzzle = document.createElement("p")
        CardMuzzle.innerText = "Muzzle: " + this.muzzle

        FilledCard.append(CardLegs,CardFur,CardTail,CardMuzzle)
    }
}

export default Dog