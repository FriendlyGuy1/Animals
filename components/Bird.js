import Animal from './animals.js'

class Bird extends Animal{
    constructor(name,age,legs,wings,beak){
        super(name,age)
        this.legs = legs;
        this.wings = wings;
        this.beak = beak;
    }

    InfoCards(){
        super.InfoCards();

        const FilledCard = document.querySelector('.Cards' + Animal.i);

        let CardLegs = document.createElement("p");
        CardLegs.innerText = "Legs: " + this.legs;
        let CardWings = document.createElement("p");
        CardWings.innerText = "Wings: " + this.wings;
        let CardBeak = document.createElement("p");
        CardBeak.innerText = "Beak: " + this.beak;

        FilledCard.append(CardLegs,CardWings,CardBeak)

    }  
}


export default Bird