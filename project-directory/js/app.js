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
  var nquestion = parseInt(prompt('How many siblings do I have?'));

  if(nquestion < answer){
    //alert('Sorry, too low!');
    nquestion = parseInt(prompt('Sorry, too low!'));
    i++;

  }
  else if (nquestion > answer){
    //alert('You are too high!');
    nquestion = parseInt(prompt('Sorry, too high!'));
    i++;
  }
  //else if (nquestion === answer);{
    alert('You are correct!');



  }
}
