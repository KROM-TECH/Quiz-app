function spec() {
  let subject = document.querySelector('#subject').value;
  let number = document.querySelector('#quesNum').value;
  let time = document.querySelector('#time').value;
  if (time == '' || subject == '' || number == '') {
    document.querySelector('#warning').style.display = 'block'
    
  } else {
    if (document.querySelector('#email').value != '') {
      db.collection('users').doc(email).set({
        email: document.querySelector('#email').value
      })
    } else {
      game(subject, number, time)
    }
  }
  }
  

function start() {
  document.querySelector('#display').innerHTML = `
   <h1>Specifications</h1>
    <hr style="margin-top: 20px; margin-bottom: 20px;">
    <p id='warning' class='red-text center' style="display:none">Ensure you filled in Subject, Time and Number</p>
    <div class="input-field ">
      <input id="email" type="text" class="validate">
      <label for="email">Email</label>
      <span class="helper-text" data-error="wrong" data-success="right">This should only be filled once and never
        again</span>
    </div>
    
    <div class="input-field ">
      <select id="subject" style="display: block !important;">
        <option value="" disabled selected>Choose your Subject</option>
        <option value="english">English</option>
        <option value="mathematics">Mathematics</option>
        <option value="commerce">Commerce</option>
        <option value="accounting">Accounting</option>
        <option value="biology">Biology</option>
        <option value="physics">Physics</option>
        <option value="chemistry">chemistry</option>
        <option value="englishlit">English lit</option>
        <option value="government">Government</option>
        <option value="crk">CRK</option>
        <option value="irk">IRK</option>
        <option value="economics">Economics</option>
        <option value="geography">Geography</option>
        <option value="civiledu">Civil Edu</option>
        <option value="insurance">Insurance</option>
        <option value="currentaffairs">Current Affairs</option>
        <option value="history">History</option>
      </select>
    </div>
    
    <div class="input-field ">
      <input id="quesNum" type="number" class="validate">
      <label for="quesNum">Number of Questions</label>
    </div>
    
    <div class="input-field ">
      <input id="time" type="number" class="validate">
      <label for="time">Duration in minutes i.e 30 for 30mins</label>
    </div>
    
    <div class="center" onClick='spec()'><a class="waves-effect waves-purple btn-flat"><b>Start</b></a></div>

  `
}

function game(course, number, time) {
  document.querySelector('#display').innerHTML = `
      <h1 id="heading">Quiz</h1>
      <hr style="margin-top: 20px;">
      
      <p id="question"></p>
      <div class="ans"></div>
      <div class="buttons">
        <button id="btn0"><span id="choice0"></span></button>
        <button id="btn1"><span id="choice1"></span></button>
        <button id="btn2"><span id="choice2"></span></button>
        <button id="btn3"><span id="choice3"></span></button>
      </div>
      
      <hr style="margin-top: 20px;">
      
      <footer>
        <p id="progress">Question x of y</p>
      </footer>
  `
  startGame(course, number, time)
}



function startGame(course, number, time) {
  console.log(course, time, number)
  var questions;
  var QuestionAPI = `https://questions.aloc.ng/api/q?subject=${course}`;
  var index = 1
  var num = number;


  //To display subject
  subject()
  // Call the function on DOMContentLoaded
  load()
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


  console.log(quiz.isEnded())

  function populate(questions) {
    if (num == index-1) {
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
    var currentQuestionNumber = index++;
    var elem = document.getElementById('progress');
    elem.innerHTML = `Question ${currentQuestionNumber} of ${num}`
  }

  function showScores() {
    var gameOverHtml = `<h1>Result</h1>
<h2 id='score'>Your Score: ${quiz.score} <h2>
    <input type='text' id='disName' placeholder='This would be made public'></input>
    <button id="btn" class='upl' disabled>Upload Score</button>
    <button id="btn" onclick="location.reload()">Try Again</button>
    <button id="btn">High Scores</button>`;


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

}
