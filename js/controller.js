//This accepts an array of questions
function Quiz(questions, num) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
  this.totalAvailableQuestions  = num;

//this gets the current question you currently
  Quiz.prototype.getQuestionIndex = function () {
    return this.questions;
    // [this.questionIndex];
  }

  Quiz.prototype.isEnded = function () {
 
    return num === this.questionIndex;

  }

  Quiz.prototype.guess = function (id, answer) {
    console.log(Question.prototype.correctAnswer(answer))
    if (Question.prototype.correctAnswer(answer)) {
      this.score++;
      document.getElementById(id).style.backgroundColor = 'green'
    } else {
      let Answer = document.querySelector('.ans')
      document.getElementById(id).style.backgroundColor = 'red'
      Answer.innerHTML = `Answer: ${Question.prototype.Answer}`
    }
    this.questionIndex++;
  }
}