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

function game(subject, number, time) {
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
}