var names = ["Witha", "Ahri", "Kayle", "Elise", "Evelynn"];

function whoPay() {
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople ) 
    var randomPerson = names[randomPersonPosition]

    return randomPerson + " is going to pay lunch today"
}

whoPay()