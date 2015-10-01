var correctAnswers = 0;

function ques1() {
  var question1 = prompt('Was I born in SF?');
  if (question1.toUpperCase()==='YES' || question1.toUpperCase()==='Y') {
  	alert('Correct, I was born in SF');
  	correctAnswers++;
  } else {
  	alert('Incorrect, I was born in SF');
  }
}

function ques2() {
  var question2 = prompt('Is my favorite food Pizza?');
  if (question2.toUpperCase()==='YES' || question2.toUpperCase()==='Y' ){
  	alert('Correct, Pizza is great.');
  	correctAnswers++;
  } else {
  	alert('Incorrect, Pizza is the best.');
  }
}

function ques3() {
  var question3 = prompt('Do I dip my fries in chocolate shakes?');
  if (question3.toUpperCase()==='YES' || question3.toUpperCase()==='Y') {
  	alert('Correct, thank you for the intro Wendy\'s!');
  	correctAnswers++;
  } else {
  	alert('It\'s wierd, but I do.');
  }
}


ques1();
ques2();
ques3();

console.log('User got ' + correctAnswers + ' correct answers.');

alert('You got ' + correctAnswers + ' answers correct out of 3 questions.');
