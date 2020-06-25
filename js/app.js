var questions;
var QuestionAPI = 'https://questions.aloc.ng/api/q?subject=english';
var index = 1
var num = 10;

start()
function start() {
  var elems = document.querySelectorAll('.modal');
  var elem = document.querySelector(".modal")
  var instances = M.Modal.init(elems, { dismissible: false });
  var instance = M.Modal.getInstance(elem);
  instance.open();
}

//To display subject
subject()
function subject() {
  fetch(QuestionAPI).then(function (res) {
    res.json()
      .then(function (dam) {
        document.querySelector('#heading').innerHTML = dam.subject
      })
  })
}
//based on the api request, displays questions and options
function load() {
  fetch(QuestionAPI).then(function (res) {
    res.json()
      .then(function (dam) {
        const ans = dam.data.answer;
        const answer = dam.data.option[dam.data.answer]
        var questions = new Question(dam.data.question, [dam.data.option.a, dam.data.option.b, dam.data.option.c, dam.data.option.d], answer);
        console.log(questions)
        populate(questions)

      })
  })
}


var quiz = new Quiz(questions, num)
// Call the function on DOMContentLoaded
load()

console.log(quiz.isEnded())

function populate(questions) {
  if (quiz.isEnded()) {
    //do something
    showScores()
  }
  else {
    //show questions

    var element = document.querySelector('#question');
    let Answer = document.querySelector('.ans').innerHTML = ""
    element.innerHTML = questions.text

    // show Choices
    var choices = questions.choices;
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

    setTimeout(load, 0)
  }
}

function showProgress() {
  var currentQuestionNumber = index ++;
  var elem = document.getElementById('progress');
  elem.innerHTML = `Question ${currentQuestionNumber} of ${num}`
}

function showScores() {
  var gameOverHtml = `<h1>Result</h1>`;
  gameOverHtml += `<h2 id = 'score'>Your Score: ${quiz.score} <h2>
  <input type= 'text' id='disName' placeholder='This would be made public'></input>
  <button id="btn" class='upl' disabled>Upload Score</button>
  <button id="btn" onclick="location.reload()">Try Again</button>
 <button id="btn">High Scores</button>`

  const display = document.getElementById('display');
  display.innerHTML = gameOverHtml;
  upl()
}


//react to thekeyboard event to check if the input is null or not
function upl() {
  document.querySelector('#disName').addEventListener('keyup', function (e) {
    if (e.target.value == '') {
      document.querySelector('.upl').disabled = true;
    } else {
      document.querySelector('.upl').disabled = false;
    }
  })
}
