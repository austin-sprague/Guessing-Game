var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');

var correctAnswers = 0;

function ques1() {
  var question1 = prompt('Was I born in SF?');
  if (question1.toUpperCase()==='YES' || question1.toUpperCase()==='Y') {
  	one.innerHTML = 'Correct, I was born in SF';
  	correctAnswers++;
  } else {
  	one.innerHTML = 'Incorrect, I was born in SF';
  }
}

function ques2() {
  var question2 = prompt('Is my favorite food Pizza?');
  if (question2.toUpperCase()==='YES' || question2.toUpperCase()==='Y' ){
  	two.innerHTML = 'Correct, Pizza is great.';
  	correctAnswers++;
  } else {
  	two.innerHTML = 'Incorrect, Pizza is the best.';
  }
}

function ques3() {
  var question3 = prompt('Do I dip my fries in chocolate shakes?');
  if (question3.toUpperCase()==='YES' || question3.toUpperCase()==='Y') {
  	three.innerHTML = 'Correct, thank you for the intro Wendy\'s!';
  	correctAnswers++;
  } else {
  	three.innerHTML = 'It\'s wierd, but I do.';
  }
}

ques1();
ques2();
ques3();

console.log('User got ' + correctAnswers + ' correct answers.');

alert('You got ' + correctAnswers + ' answers correct out of 3 questions.');
