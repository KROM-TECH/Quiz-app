var questions;
let QuestionAPI = 'https://questions.aloc.ng/api/q?subject=physics';

function load() {
  fetch(QuestionAPI).then(function (res) {
    res.json()
      .then(function (dam) {
        let questions = new Question(dam.data.question, [dam.data.option.a, dam.data.option.b, dam.data.option.c, dam.data.option.d], dam.data.option + ('.' + dam.data.answer)),
      })
  })
}


var quiz = new Quiz(questions, num)

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

    setTimeout(populate, 600)
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
  gameOverHtml += `<button id="btn">Upload Score</button>`
  gameOverHtml += `<button id="btn" onclick="location.reload()">Try Again</button>`
  gameOverHtml += `<button id="btn">High Scores</button>`

  const display = document.getElementById('display');
  display.innerHTML = gameOverHtml;
}

