let name = "Witha";

let firstChar = name.slice(0,1);

var firstLetterUP = firstChar.toUpperCase();

var restOfName = name.slice(1,name.length);

var restOfName = restOfName.toLowerCase();

var hello = (`Hello, ${firstChar}${restOfName}`);

console.log(hello);
