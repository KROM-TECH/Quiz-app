function populate() {
  if (quiz.isEnded()) {
    //do something
  }
  else {
    //show questions
    var element = document.querySelector('#question');
    element.innerHTML = quiz.getQuestionIndex().text

    // show Choices
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++){
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
    quiz.guess(guess);
    populate
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

  var elem = document.getElementById('quiz');
  elem.innerHTML = gameOverHtml;
}
var questions = [
  new Question('blah, blah, blah', ['blep', 'clip', 'teas', 'coffe'], 'clip'),
  new Question('blah, blah, blah', ['blep', 'clip', 'teas', 'coffe'], 'clip'),
  new Question('blah, blah, blah', ['blep', 'clip', 'teas', 'coffe'], 'clip'),
  new Question('blah, blah, blah', ['blep', 'clip', 'teas', 'coffe'], 'clip'),
]

var quiz = new Quiz(questions)

populate()