var name = prompt("Enter your name");
var firstLetter = name.slice(0,1);
var uppercase1 = firstLetter.toUpperCase();
var restLetters = name.slice(1,name.length);
var lowercase1 = restLetters.toLowerCase();
var finalName = uppercase1 + lowercase1;
alert("Hello, " +finalName+ "!" + " Nice to see you");
