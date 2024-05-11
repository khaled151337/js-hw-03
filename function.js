let light = document.querySelector("img");
let turnOn = document.querySelector("#on");
let turnOff = document.querySelector("#off");


turnOff.style.backgroundColor = "greenyellow";
turnOn.addEventListener("click", function() {
    light.src = `On balp.png`;
    turnOn.style.backgroundColor = "red";
    turnOff.style.backgroundColor = "white";
});

turnOff.addEventListener("click", function() {
    light.src = `Off balp.png`;
    turnOff.style.backgroundColor = "greenyellow";
    turnOn.style.backgroundColor = "white";
    
});



const fan = document.querySelector("#fan");
const fanOn = document.querySelector("#fan_on");
const fanOff = document.querySelector("#fan_off");



fanOn.addEventListener("click", function() {
    fan.classList.add("active");
    fan.classList.remove("deactive");
    fanOn.style.backgroundColor = "red";
    fanOn.style.fontSize = "20px";

    fanOff.style.backgroundColor = "white";
    fanOff.style.fontSize = "14px";

});

fanOff.addEventListener("click", function() {
    fan.classList.add("deactive");
    fan.classList.remove("active");
    fanOff.style.backgroundColor = "greenyellow";
    fanOff.style.fontSize = "20px";

    fanOn.style.backgroundColor = "white";
    fanOn.style.fontSize = "14px";

});

/*
OPERATORS---

ARITHMATICS:-"+", "-", "*", "/", "%", "**";
ASSINGMENT:- "=", "+=", "-=", "*=", "/=";
COMOARISON:- "==", "===", "!=", "!==", "=<", ">=";
LOGICAL:- "&&", "||", "!";
*/


let a = prompt("Enter a number to check it odd or even...");

a = Number(a);

if (a % 2 == 0) {
    alert("Congratulations! You tipe an even number...");
    console.log(typeof(a));
} else{
    alert("The number you type is Odd!! Please enter a even number");
}


