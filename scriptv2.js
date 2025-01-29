var fn = prompt("Enter your first name");
var ln = prompt("Enter your last name");
var by = prompt("Enter your birth year");

var y = 2025;
var age = y - parseInt(by);

document.getElementById("output").innerHTML = "Hello " + fn + " " + ln + "! How does it feel to be " + age + " years old?";
