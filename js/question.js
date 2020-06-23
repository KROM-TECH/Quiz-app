//a function to accept the question(text), choices(options) and answer
function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;



  Question.prototype.correctAnswer = function (choice) {

    return choice === answer
  }
  //returns correct answer
  Question.prototype.Answer = answer
    
  
}