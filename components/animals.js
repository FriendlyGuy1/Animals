class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    static i = 0;

    InfoCards(){
        Animal.i +=1
        const MainDiv = document.querySelector("#Main_div")
        const FilledCard = document.createElement("div");
        FilledCard.className = "Cards"+ Animal.i
        let CardName = document.createElement("h4")
        CardName.innerText = "Name: " + this.name
        let CardAge = document.createElement("p")
        CardAge.innerText = "Age: " + this.age

        FilledCard.append(CardName,CardAge)
        MainDiv.appendChild(FilledCard)
    }
}

export default Animal