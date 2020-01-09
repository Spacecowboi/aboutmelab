'use strict';

var greeting = prompt('Welcome to my page! What is your name?');
//console.log(greeting);
alert('Good to meet you ' + greeting + '!');


var question1 = prompt('What do you think my name is?');
if(question1.toUpperCase() === 'ANTHONY'){
  //console.log(question1)
  alert('Correct!');
} else
  alert('It is anthony!');

var question2 = prompt('Did I grow up in the US?');
if(question2 .toLowerCase() === 'yes'){
  //console.log(question2)
  alert('Correct!');
} else
  alert('I did actually!');

var question3 = prompt('Do I like scary movies?');
if(question3.toLowerCase() === 'yes'){
  //console.log(question3)
  alert('Take my strong hand!');
} else
  alert('I LOVE scary movies');

var question4 = prompt('Is my favorite food Japanese?');
if(question4.toUpperCase() === 'YES'){
  //console.log(question4)
  alert('I love sushi');
} else
  alert('It is Japanese!');

var question5 = prompt('Do I like video games?');
if(question5.toLowerCase() === 'yes'){
  //console.log(question5)
  alert('Correct! I love them!');
} else
  alert('wrongo! I love games!');

alert('Thanks for playing along ' + greeting + '!');

//question 6
//worked with alex pena for this question, great partner

var answer = 2;
var i = 0;

while( i < 4) {

  var nquestion = prompt('How many siblings do I have?');

  if(nquestion < answer){
    alert('Sorry, too low!');
    i++;
  }else if (nquestion > answer){
    alert('You are too high!');
    i++;
  }else if (nquestion == 2){
    alert('You are correct!');
    break;
  }
}
alert('The correct answer was 2');
//Chance, if you are reading this, it was a damn semicolon right after the parenthesis in the third if else. A SEMICOLON.
//question 7
var userScore = 0;
var question = ['Where did I grow up?'];
var answers = ['North Carolina', 'New York', 'Arizona', 'Texas', 'Florida', 'Nevada' ];
var response = '';

for (var i = 0; i <= 6; i++) {
  response = prompt(question[i]);
  if (response.toLowerCase() === answers[i].toLowerCase()){
    alert('You got it!');
    userScore++;
  } else {
    alert('Nope! Not quite!');
  }
  while(response !== answers){
    prompt(question);
  }

}

alert('You got ' + userScore + ' correct, out of ' + answers.length + ',' + ' Good job!');