const MainDiv = document.querySelector("#Main_div")


export function DogForm(){
    const my_form = document.createElement("form");

    const NameL = document.createElement("label")
    NameL.innerHTML ="Name: "
    const Name = document.createElement("input")
    Name.id = "Name"
    const AgeL = document.createElement("label")
    AgeL.innerHTML ="Age: "
    const Age = document.createElement("input")
    Age.id = "Age"
    const LegsL = document.createElement("label")
    LegsL.innerHTML ="Legs: "
    const Legs = document.createElement("input")
    Legs.id = "Legs"
    const FurL = document.createElement("label")
    FurL.innerHTML ="Fur: "
    const Fur = document.createElement("input")
    Fur.id = "Fur"
    const TailL = document.createElement("label")
    TailL.innerHTML ="Tail: "
    const Tail = document.createElement("input")
    Tail.id = "Tail"
    const MuzzleL = document.createElement("label")
    MuzzleL.innerHTML ="Muzzle: "
    const Muzzle = document.createElement("input")
    Muzzle.id = "Muzzle"

    const my_button = document.createElement("button")
    my_button.innerText ="Submit"
    my_button.id = "submitBtn"

    my_form.append(NameL,Name,AgeL,Age,LegsL,Legs,FurL,Fur,TailL,Tail,MuzzleL,Muzzle,my_button)
    MainDiv.append(my_form)
}

export function CatForm(){
    const my_form = document.createElement("form");

    const NameL = document.createElement("label")
    NameL.innerHTML ="Name: "
    const Name = document.createElement("input")
    Name.id = "Name"
    const AgeL = document.createElement("label")
    AgeL.innerHTML ="Age: "
    const Age = document.createElement("input")
    Age.id = "Age"
    const LegsL = document.createElement("label")
    LegsL.innerHTML ="Legs: "
    const Legs = document.createElement("input")
    Legs.id = "Legs"
    const FurL = document.createElement("label")
    FurL.innerHTML ="Fur: "
    const Fur = document.createElement("input")
    Fur.id = "Fur"
    const TailL = document.createElement("label")
    TailL.innerHTML ="Tail: "
    const Tail = document.createElement("input")
    Tail.id = "Tail"
    const WhiskersL = document.createElement("label")
    WhiskersL.innerHTML ="Whiskers: "
    const Whiskers = document.createElement("input")
    Whiskers.id = "Whiskers"

    const my_button = document.createElement("button")
    my_button.innerText ="Submit"
    my_button.id = "submitBtn"


    my_form.append(NameL,Name,AgeL,Age,LegsL,Legs,FurL,Fur,TailL,Tail,WhiskersL,Whiskers,my_button)
    MainDiv.append(my_form)
}


export function BirdForm(){
    const my_form = document.createElement("form");

    const NameL = document.createElement("label")
    NameL.innerHTML ="Name: "
    const Name = document.createElement("input")
    Name.id = "Name"
    const AgeL = document.createElement("label")
    AgeL.innerHTML ="Age: "
    const Age = document.createElement("input")
    Age.id = "Age"
    const LegsL = document.createElement("label")
    LegsL.innerHTML ="Legs: "
    const Legs = document.createElement("input")
    Legs.id = "Legs"
    const WingsL = document.createElement("label")
    WingsL.innerHTML ="Wings: "
    const Wings = document.createElement("input")
    Wings.id = "Wings"
    const BeakL = document.createElement("label")
    BeakL.innerHTML ="Beak: "
    const Beak = document.createElement("input")
    Beak.id = "Beak"


    const my_button = document.createElement("button")
    my_button.innerText ="Submit"
    my_button.id = "submitBtn"

    my_form.append(NameL,Name,AgeL,Age,LegsL,Legs,WingsL,Wings,BeakL,Beak,my_button)
    MainDiv.append(my_form)
}

