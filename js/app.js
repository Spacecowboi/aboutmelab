'use strict';

function introQuestion() {var greeting = prompt('Welcome to my page! What is your name?');
//console.log(greeting);
  alert('Good to meet you ' + greeting + '!');
}

function nameQ() {var question1 = prompt('What do you think my name is?');
  if(question1.toUpperCase() === 'ANTHONY'){
  //console.log(question1)
    alert('Correct!');
  } else
    alert('It is anthony!');
}

function bornQ() {var question2 = prompt('Did I grow up in the US?');
  if(question2 .toLowerCase() === 'yes'){
  //console.log(question2)
    alert('Correct!');
  } else
    alert('I did actually!');
}

function movieQ() {var question3 = prompt('Do I like scary movies?');
  if(question3.toLowerCase() === 'yes'){
  //console.log(question3)
    alert('Take my strong hand!');
  } else
    alert('I LOVE scary movies');
}

function foodQ() {var question4 = prompt('Is my favorite food Japanese?');
  if(question4.toUpperCase() === 'YES'){
  //console.log(question4)
    alert('I love sushi');
  } else
    alert('It is Japanese!');
}

function gameQ() {var question5 = prompt('Do I like video games?');
  if(question5.toLowerCase() === 'yes'){
  //console.log(question5)
    alert('Correct! I love them!');
  } else
    alert('wrongo! I love games!');

  alert('Thanks for playing along ' + greeting + '!');
}
//question 6
//worked with alex pena for this question, great partner

function siblingQ(){var answer = 2;
  var u = 0;

  while( u < 4) {

    var nquestion = prompt('How many siblings do I have?');

    if(nquestion < answer){
      alert('Sorry, too low!');
      u++;
    }else if (nquestion > answer){
      alert('You are too high!');
      u++;
    }else if (nquestion == 2){
      alert('You are correct!');
      break;
    }
  }
  alert('The correct answer was 2');
}
// Chance, if you are reading this, it was a damn semicolon right after the parenthesis in the third if else. A SEMICOLON.
//question 7

function statesQ(){
  var userScore = 0;
  var answers = ['North Carolina', 'New York', 'Arizona', 'Texas', 'Florida', 'Nevada' ];
  var response = '';
  var sortedAnswers = [];
  for ( var i = 0; i < answers.length; i++){
    sortedAnswers.push(answers[i].toLowerCase());
  }
  for (var i = 0; i <= 5; i++) {
    response = prompt('What states have I been to?');
    if (sortedAnswers.includes(response)){
      alert('You got it!');
      userScore++;
    }else if (answers.includes(response)){
      alert('You got it!');
      userScore++;
    }
    else prompt('Sorry thats wrong');
  }
  alert('You got ' + userScore + ' correct, out of ' + answers.length + ',' + ' Good job!');
}
introQuestion();
nameQ();
bornQ();
movieQ();
foodQ();
gameQ();
siblingQ();
statesQ();
