

//Introduction;
function visitS() {var userName = prompt('Hi, thanks for visiting my site! \n What is your name?');
//console.log (name);
  alert('Nice to meet you! \n' + userName + ', Is it ok if I ask you some questions?');
}
//Question #1

function codeF() {var fun = prompt('Are you having fun at codeFellows?');
//console.log(fun);

  if (fun.toLowerCase() === 'yes' || fun.toLowerCase() === 'y') {
    alert('Thats awesome, so am I!');
  }
  else {
    alert('Well lets work together to make it fun!');
  }
}
//Question #2

function games() {var videogames = prompt('Do you like video games?');
  console.log(videogames);

  switch(videogames.toLowerCase()){
  case 'yes':
    alert('Hey me too!');
    break;
  case 'y':
    alert('Hey me too!');
    break;
  case 'no':
    alert('I used to, but dont have much time anymore.');
    break;
  case 'n':
    alert('I used to, but dont have much time anymore.');
    break;
  }
}

//Question #3

function thirsty() {var drink = prompt('Can I get you something to drink? \n I have:  Beer, Wine, Liquor, Water or Soda?');
//console.log(drink);

  switch(drink.toLowerCase()){
  case 'beer':
    alert('Sure let me grab one for you!');
    break;
  case 'wine':
    alert('You got it, I only have a white zinfandel.');
    break;
  case 'liquor':
    alert('Lets do it! \n It\'s 5 o\'clock somewhere');
    break;
  case 'water':
    alert('Yeah better take it easy for now. \n Still got some homework to finish up.');
    break;
  case 'soda':
    alert('Cool, I\'ve got Coke or Diet Coke!');
    break;
  }
}

//Question #4
function annoy() {
  var bother = prompt('Am I bothering you with all my questions?');
  //console.log(bother);


  if (bother.toLowerCase() === 'yes' || bother.toLowerCase() === 'y') {
    alert('Ok, I\'m sorry just trying learn more about you.');
  }
  else if (bother.toLowerCase() === 'no' || bother.toLowerCase() === 'n') {
    alert('Great, I\'m just trying to learn more about you.');
  }
  else {
    alert('Sorry I didn\'t understand that, I only have 1 more question');
  }
}
//Question #5

function fun() {var learn = prompt('So far, what are you having the most fun with? \n HTML, CSS, or JavaScript?');
//console.log(learn);

  switch(learn.toLowerCase()){
  case 'html':
    alert('Yeah that was pretty easy!');
    break;
  case 'css':
    alert('Yeah there is so much you can do to make things look how ever you want!');
    break;
  case 'javascript':
    alert('I know we ar just getting started but I can already see the potential of it');
    break;
  }


  // Outro

  // alert('Well ' + userName + ' Since you said ' + videogames + ' to Video Games, here\'s your ' + drink + '. Let\'s get out of here. Later we can work on ' + learn + ' together.');

  // alert('Ok, now its time for me to quiz you. Don\'t worry I only have 5 questions.');
//Question #6
//Worked with anthony C. on this loop
}


function guesses() {
  var score = 0;
  var answer = '35';
  var u = 0;
  while (u < 4) {
    var guess = prompt('You get only 4 guesses, How old am I?');
    u++;
    if (guess === answer) {
      score++;
      u = 4;
      alert('You got it!!');
      break;
    }
    else if (guess < answer) {
      alert('Sorry too low.');
    }
    else if (guess > answer) {
      alert('You are too high.');
    }
  }
  alert('Ok I\'ll just tell you...... I\'m 35 years old.');
}
// Question #7
// Modified from code in demo repo
function truckC(){
  var score2 = 0;
  var answers = ['Red', 'Black', 'Green','Purple', 'Yellow', 'Magenta'];
  var response = '';
  var sortAnswers = [];
  for (var i = 0; i < answers.length; i++){
    sortAnswers.push(answers[i].toLowerCase());
  }
  for (var i = 0; i <= 5; i++) {
    response = prompt('What colors do I like?');
    if (sortAnswers.includes(response)){
      alert('You did it! That is correct!');
      score2++;
    }
    else if (answers.includes(response)){
      alert('You did it! That is correct!');
      score2++;
    }
    else prompt('You are wrong!!');
  }
  alert('You got ' + score2 + ' correct, out of ' + answers.length + ',' + 'Great job!');
}
visitS();
codeF();
games();
thirsty();
annoy();
fun();
guesses();
truckC();
