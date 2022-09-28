// JavaScript Document
'use strict'
function validation(x){
    return (num > 100)?"Guess correct! It's indeed greater than 100": "boooooooooo!";
}
let num = Number(window.prompt("Guess a number!"));
let str = "You've entered" + num;
alert(validation(num) + "\n" + str);