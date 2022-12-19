import Dog from "./components/Dog.js"
import Cat from "./components/Cat.js"
import Bird from "./components/Bird.js"
import {DogForm,CatForm,BirdForm} from "./components/Forms.js"

const MainDiv = document.querySelector("#Main_div")

const buttons = document.createElement("div")
buttons.classList.add("buttonDiv")


const Dogs = document.createElement("button");
Dogs.innerText = "Dogs";
Dogs.addEventListener("click", ()=>{

    if(document.querySelector("form") == null){
        DogForm()
    }else{
        DogForm()
        MainDiv.removeChild(document.querySelector("form"))
    }
    
    const my_button = document.getElementById("submitBtn")
    my_button.addEventListener("click",(e) =>{
        e.preventDefault()
        let animal_name = document.getElementById("Name").value
        let animal_age = document.getElementById("Age").value
        let animal_legs = document.getElementById("Legs").value
        let animal_fur = document.getElementById("Fur").value
        let animal_tail = document.getElementById("Tail").value
        let animal_Muzzle = document.getElementById("Muzzle").value

        let dog = new Dog(animal_name,animal_age,animal_legs,animal_fur,animal_tail,animal_Muzzle)
        dog.InfoCards()
    })
})

const Cats = document.createElement("button");
Cats.innerText = "Cats";
Cats.addEventListener("click", ()=>{
    if(document.querySelector("form") == null){
        CatForm()
    }else{
        CatForm()
        MainDiv.removeChild(document.querySelector("form"))
    }

    const my_button = document.getElementById("submitBtn")
    my_button.addEventListener("click",(e) =>{
        e.preventDefault()
        let animal_name = document.getElementById("Name").value
        let animal_age = document.getElementById("Age").value
        let animal_legs = document.getElementById("Legs").value
        let animal_fur = document.getElementById("Fur").value
        let animal_tail = document.getElementById("Tail").value
        let animal_Whiskers = document.getElementById('Whiskers').value

        let cat = new Cat(animal_name,animal_age,animal_legs,animal_fur,animal_tail,animal_Whiskers)
        cat.InfoCards()
    })

})

const Birds = document.createElement("button");
Birds.innerText = "Birds";
Birds.addEventListener("click", ()=>{

    if(document.querySelector("form") == null){
        BirdForm()
    }else{
        MainDiv.removeChild(document.querySelector("form"))
        BirdForm()
    }

    const my_button = document.getElementById("submitBtn")
    my_button.addEventListener("click",(e) =>{
        e.preventDefault()
        let animal_name = document.getElementById("Name").value
        let animal_age = document.getElementById("Age").value
        let animal_legs = document.getElementById("Legs").value
        let animal_Wings = document.getElementById("Wings").value
        let animal_Beak = document.getElementById("Beak").value
        let bird = new Bird(animal_name,animal_age,animal_legs,animal_Wings,animal_Beak)
        bird.InfoCards()
    })
})

buttons.append(Dogs,Cats,Birds)
MainDiv.appendChild(buttons)