'use strict';

var greeting = prompt('Welcome to my page! What is your name?');
//console.log(greeting);
alert('Good to meet you ' + greeting + '!');


var question1 = prompt('What do you think my name is?');
if(question1.toUpperCase() === 'ANTHONY'){
  alert('Correct!');
} else
  alert('It is anthony!');

var question2 = prompt('Did I grow up in the US?');
if(question2 .toLowerCase() === 'yes'){
  alert('Correct!');
} else
  alert('I did actually!');

var question3 = prompt('Do I like scary movies?');
if(question3.toLowerCase() === 'yes'){
  alert('Take my strong hand!');
} else
  alert('I LOVE scary movies');

var question4 = prompt('Is my favorite food Japanese?');
if(question4.toUpperCase() === 'YES'){
  alert('I love sushi');
} else
  alert('It is Japanese!');

var question5 = prompt('Do I like video games?');
if(question5.toLowerCase() === 'yes'){
  alert('Correct! I love them!');
} else
  alert('wrongo! I love games!');
