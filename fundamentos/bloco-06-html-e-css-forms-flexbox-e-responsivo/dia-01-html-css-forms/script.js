const stateSelector = document.getElementById('state-selector');

const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

for (let index = 0; index < states.length; index += 1) {
  const state = states[index];
  const stateOption = document.createElement('option');
  
  stateOption.value = state.toLowerCase();
  stateOption.innerText = state;

  stateSelector.appendChild(stateOption);
}

const startDate = document.getElementById('start-date');
const submitButton = document.getElementById('submit-resume');

function checkDateContents() {
  const dateElements = startDate.value.split('/');

  for (let index = 0; index < dateElements.length; index += 1) {
    if (isNaN(dateElements[index])){
      alert('Data inválida');
    }
  }
}

function checkDayRange() {
  const dateElements = startDate.value.split('/');
  const day = parseInt(dateElements[0]);

  if (!(day > 0 && day <= 31)) {
    alert('Dia inválido');
  }
}

function checkMonthRange() {
  const dateElements = startDate.value.split('/');
  const month = parseInt(dateElements[1]);
  
  if(!(month > 0 && month <= 12)) {
    alert('Mês inválido');
  }
}

function checkYearRange() {
  const dateElements = startDate.value.split('/');
  const year = parseInt(dateElements[2]);
  
  if (!(year > 0)) {
    alert('Ano inválido');
  }
}

function validateDate() {
  checkDateContents()
  checkDayRange();
  checkMonthRange();
  checkYearRange();
}

submitButton.addEventListener('click', validateDate);


