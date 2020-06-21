var questions = [
  new Question('blah, blah, blah', ['blep', 'clip', 'teas', 'coffe'], 'clip'),
  new Question('blah2, blah2, blah2', ['blep2', 'clip2', 'teas2', 'coffe2'], 'clip2'),
  new Question('blah, blah, blah', ['blep', 'clip', 'teas', 'coffe'], 'clip'),
  new Question('blah4, bla4h, bla4h', ['blep4', 'clip4', 'teas4', 'coffe4'], 'clip4'),
]

var quiz = new Quiz(questions)

populate()

console.log(quiz.isEnded())

function populate() {
  if (quiz.isEnded()) {
    //do something
    console.log('done1')
    showScores()
    console.log('done2')
  }
  else {
    //show questions

    var element = document.querySelector('#question');
    let Answer = document.querySelector('.ans').innerHTML = ""
    element.innerHTML = quiz.getQuestionIndex().text

    // show Choices
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      document.querySelector('#btn' + i).style.backgroundColor = 'rgba(23, 11, 114, 0.8)'
      var element = document.querySelector('#choice' + i)
      element.innerHTML = choices[i];
      
      guess('btn' + i, choices[i]);
    }

    showProgress()
  }
}
function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(id, guess);
    
    setTimeout( populate, 600)
  }
}

function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var elem = document.getElementById('progress');
  elem.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`
}

function showScores() {
  var gameOverHtml = `<h1>Result</h1>`;
  gameOverHtml += `<h2 id = 'score'>Your Score: ${quiz.score} <h2>`

  const display = document.getElementById('display');
  display.innerHTML = gameOverHtml;
}

