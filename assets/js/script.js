const question = document.getElementById(question)
const choices = Array.from(document.getElementsByClassName("selection-text");
console.log(selections);

let currentQuestion = {};
let acceptinganswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions =[];

let questions = [
{
    question:
        "What is a function?",
        selection1: "<1. an application to generate passwords>",
        selection2: "<2. a set of code that makes something happen when you call it>",
        selection3: "<3. a webpage layout>",
        answer: 2
},

    question:
        "What does "git log" do? ",
        selection1: "<1. it tells VS Code to open a file>",
        selection2: "<2. it allows to you add changes to your repository>",
        selection3: "<3. it shows history of all commits made>",
        answer: 3
}, 

    question:
        "Which of the following is a Javascript Timer Function? ",
        selection1: "<1. TimeoutSet>",
        selection2: "<2. countdownTimer>",
        selection3: "<3. setTimeout>",
        answer: 3

startGame();

var counter = 30
var countdown = function() {
    console.log(counter);
    counter--;
    if (counter===0)
    console.log ("All done!");
    clearineterval(startcountdown);
};
var startcountdown=setineterval (countdown, 1000);