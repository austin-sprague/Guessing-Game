var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');

var correctAnswers = 0;

var questions = ["Was I born in SF?", "Is my favorite food Pizza?", "Do I dip my fries in chocolate shakes?"]
var answers = ["YES", "Y", "NO", "N"];

function ques1() {
  var question1 = prompt(questions[0]);
  if (question1.toUpperCase()=== answers[0] || question1.toUpperCase()===answers[1]) {
  	one.innerHTML = '<p>Correct, I was born in SF.</p>'+'<p><img src="img/dudeomg.jpg" width="200" height="200"/></p>';
  	correctAnswers++;

  } else {
  	one.innerHTML = 'Incorrect, I was born in SF';
  }
}

function ques2() {
  var question2 = prompt(questions[1]);
  if (question2.toUpperCase()===answers[0] || question2.toUpperCase()===answers[1]){
  	two.innerHTML = '<p>Correct, Pizza is great.</p>'+'<p><img src="img/dudeomg.jpg" width="200" height="200"/></p>';
  	correctAnswers++;
  } else {
  	two.innerHTML = 'Incorrect, Pizza is the best.';
  }
}

function ques3() {
  var question3 = prompt(questions[2]);
  if (question3.toUpperCase()===answers[0] || question3.toUpperCase()===answers[1]) {
  	three.innerHTML = '<p>Correct, thank you for the intro Wendy\'s!</p>'+'<p><img src="img/dudeomg.jpg" width="200" height="200"/></p>';
  	correctAnswers++;
  } else {
  	three.innerHTML = 'It\'s weird, but I do.';
  }
}

ques1();
ques2();
ques3();

console.log('User got ' + correctAnswers + ' correct answers.');

four.innerHTML = 'You got ' + correctAnswers + ' answers correct out of 3 questions.';


