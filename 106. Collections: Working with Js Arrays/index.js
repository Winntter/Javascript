var guestList = ["Witha", "Katarina", "Riven", "Qiyana"];

var guestName = prompt("What is your name? ");

if (guestList.includes(guestName)) {
    console.log("Welcome, " + guestName);
} else {
    console.log("Sorry, maybe next time!");
}