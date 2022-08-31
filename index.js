var readlineSync = require("readline-sync");
var score = 0;

var question1 = "Who is the Father of Luke Skywalker? ";
var question2 = "Who follows the Dark Side? Jedi or Sith? ";
var question3 = "What is the name of the Planet Destroying Weapon of the Sith? ";
var question4 = "Who kills Mace Windu? "
var question5 = "What is the real name of the Lead of the Series 'Mandalorian'? "

var ans1 = "Anakin Skywalker";
var ans2 = "Sith";
var ans3 = "Death Star";
var ans4 = "Senator Palpatine"
var ans5 = "Djinn Djarin"

console.log("---------------------------------------------");

console.log("_____Lets quiz you on How well you know StarWars! May the Force Be With You______");
console.log("");

var username = readlineSync.question("First, Tell me your name: ");
console.log("---------------------------------------------");

console.log("Hello Youngling,Par", username);
console.log("Lets Quiz You on the Ways of the Force! ");
console.log("---------------------------------------------");
console.log("");

var userAns = readlineSync.question(question1);
if (userAns.toLowerCase() === ans1.toLowerCase()) {
  console.log("Correct Answer, You get 10 points!!");
  score = score + 10;
  console.log("---------------------------------------------");
} else {
  console.log("Oh No!, That was an incorrect answer :(");
  console.log("The correct ans is: " + ans1);
  console.log("---------------------------------------------");
}

var userAns = readlineSync.question(question2);
if (userAns.toLowerCase() === ans2.toLowerCase()) {
  console.log("Correct Answer, You get 10 points!!");
  score = score + 10;
  console.log("---------------------------------------------");
} else {
  console.log("Oh No!, That was an incorrect answer :(");
  console.log("The correct ans is: " + ans2);
  console.log("---------------------------------------------");
}

var userAns = readlineSync.question(question3);
if (userAns.toLowerCase() === ans3.toLowerCase()) {
  console.log("Correct Answer, You get 10 points!!");
  score = score + 10;
  console.log("---------------------------------------------");
} else {
  console.log("Oh No!, That was an incorrect answer :(");
  console.log("The correct ans is: " + ans3);
  console.log("---------------------------------------------");
}

var userAns = readlineSync.question(question4);
if (userAns.toLowerCase() === ans4.toLowerCase()) {
  console.log("Correct Answer, You get 10 points!!");
  score = score + 10;
  console.log("---------------------------------------------");
} else {
  console.log("Oh No!, That was an incorrect answer :(");

  console.log("The correct ans is: " + ans4);
  console.log("---------------------------------------------");
}

var userAns = readlineSync.question(question5);
if (userAns.toLowerCase() === ans5.toLowerCase()) {
  console.log("Correct Answer, You get 10 points!!");
  score = score + 10;
  console.log("---------------------------------------------");
} else {
  console.log("Oh No!, That was an incorrect answer :(");
  console.log("The correct ans is: " + ans5);
  console.log("---------------------------------------------");
}

console.log("Your total Score is: ", score);
if (score.valueOf() > 10) {
  console.log("You know the ways of the Force Really Well! ");
  console.log("---------------------------------------------");
} else {
  console.log("Dont worry, you can try again! You can master the ways of the Force with a little bit of Practice :( ");
  console.log("---------------------------------------------");
}
