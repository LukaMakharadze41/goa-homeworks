switch (prompt("Enter your favorite number:")) {
    case "1":
        alert("Your favorite number is even.");
        break;
    default:
        alert("your favorite number is odd.");
}
alert(prompt("Enter your favorite number:"));       








//task  2

let gradus = prompt("Enter the temperature in degrees Celsius:");

if (gradus < 0) {
    alert("It's freezing outside.");
}
else if (gradus <= 15) {
    alert("It's cold outside.");
} else if (gradus <= 25) {
    alert("The weather is pleasant.");
}
else if (gradus <= 30) {
    alert("The weather is nice.");
} else if (gradus <= 50) {
    alert("It's hot outside.");
}

//task 3

let score = prompt("Enter your score:");

if (score >= 90) {
    alert("You got an A.");
}
else if (score >= 80) {
    alert("You got a B.");
}
else if (score >= 70) {
    alert("You got a C.");
}
else if (score >= 60) {
    alert("You got a D.");
}
else if (score >= 50) {
    alert("You got an E.");
}
else {
    alert("You got an F.");
}