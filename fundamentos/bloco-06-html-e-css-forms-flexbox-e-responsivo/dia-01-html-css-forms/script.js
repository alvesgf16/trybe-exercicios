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

function checkCompletion() {
  const requiredElements = document.querySelectorAll('[required]');

  for (let index = 0; index < requiredElements.length; index += 1) {
    if (requiredElements[index].value === "") {
      alert('Favor preencher todos os campos');
      return;
    }
  }
}

// startDate.DatePickerX.init({ mondayFirst: false, format: 'dd/mm/yyyy' });
startDate.id = 'datepicker';
const picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'DD/MM/YYYY',
});

// function checkDateContents(dateElements) {
//   for (let index = 0; index < dateElements.length; index += 1) {
//     if (isNaN(dateElements[index])){
//       return true;
//     }
//   }
//     return false;
// }

// function checkDateRange(dateElements) {
//   const day = parseInt(dateElements[0]);
//   const month = parseInt(dateElements[1]);
//   const year = parseInt(dateElements[2]);
  
//   if (!(day > 0 && day <= 31)) {
//     alert('Dia inválido');
//     return;
//   }
  
//   if(!(month > 0 && month <= 12)) {
//     alert('Mês inválido');
//     return;
//   }
  
//   if (!(year > 0)) {
//     alert('Ano inválido');
//     return;
//   }
// }

// function validateDate() {
//   const dateElements = startDate.value.split('/');

//   if (checkDateContents(dateElements)) {
//     alert('Data inválida');
//   } else {
//     checkDateRange(dateElements);
//   }
// }

function generateResume(event) {
  event.preventDefault();
  checkCompletion();
  // validateDate();
}

submitButton.addEventListener('click', generateResume);


