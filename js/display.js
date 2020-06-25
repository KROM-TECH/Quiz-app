function start(){
  document.querySelector('#display').innerHTML = `
    <h1>Specifications</h1>
  <hr style="margin-top: 20px; margin-bottom: 20px;">
  <div class="input-field " >
    <input id="ct" type="text" class="validate">
    <label for="ct">Email</label>
    <span class="helper-text" data-error="wrong" data-success="right">This should only be filled once and never again</span>
  </div>

  <div class="input-field ">
    <select style="display: block !important;">
      <option value="" disabled selected >Choose your Subject</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>    
  </div>

    <div class="input-field ">
      <input id="quesNum" type="number" class="validate">
      <label for="quesNum">Number of Questions</label>
    </div>

      <div class="input-field ">
        <input id="Tim" type="number" class="validate">
        <label for="Tim">Duration in minutes i.e 30 for 30mins</label>
      </div>

      <div class="center"><a class="waves-effect waves-purple btn-flat"><b>Start</b></a></div>
  `
}