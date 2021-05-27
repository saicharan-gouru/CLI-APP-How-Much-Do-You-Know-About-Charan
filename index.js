var rl = require('readline-sync');
var score = 0;
var ch = "";

//Welcome function
function welcome() {
    userName = rl.question('What Is Your Name?\n>')
    console.log('\nWelcome', userName, "to How Much Do you know About Charan?\n")
}

//array to store highscores
var highscores = [{
        name: "praveenya",
        score: 3
    },
    {
        name: "kiran",
        score: 2
    }
];



//play function
function play(question, answer) {
    userAnswer = rl.question(question)
    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
        console.log("\nright answer!");
        score++;
    } else {
        console.log("\nwrong answer!");
    }
    console.log("\nYour Current Score: ", score);
    console.log("___________________________");
}

//array of objects(questions and answers)
var questionBank = [{
        question: "What is my pet Name\na.Chocky\nb.Puppy\nc.Munnu\n>",
        answer: 'a',
    },
    {
        question: "Where do I live?\na.Huzurnagar\nb.Nalgonda\nc.Suryapet\n>",
        answer: 'a',
    },
    {
        question: "What is my fav colour\na.Red\nb.Blue\nc.Green\n>",
        answer: 'b',
    }
];

//game function
function game() {
    for (var i = 0; i < questionBank.length; i++) {
        currentQuestion = questionBank[i];
        play(currentQuestion.question, currentQuestion.answer);
        if (i < questionBank.length - 1) {
            ch = rl.question("\nEnter e to exit or any other key to continue:\n>")
            console.log("___________________________\n")
            if (ch.toLowerCase() === 'e') break;
        }
    }
}

//displayScore function
function displayScore() {
    console.log("\nYayy..You have scored : ", score, " Out Of ", questionBank.length)
    console.log("\ncheckout the scores below..If you beat the score of anyone ping me with screenshot I will update..:)")
    highscores.map(score => console.log(score.name, ":", score.score))
}

welcome()
game()
displayScore()