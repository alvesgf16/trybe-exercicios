const stateSelector = document.getElementById('state-selector');

const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

for (let index = 0; index < states.length; index += 1) {
  const state = states[index];
  const stateOption = document.createElement('option');
  
  stateOption.value = state.toLowerCase();
  stateOption.innerText = state;

  stateSelector.appendChild(stateOption);
}

const fieldsToValidate = document.querySelectorAll('[required]');
const form = document.querySelector('form');

for (let index = 0; index < fieldsToValidate.length; index += 1) {
  const field = fieldsToValidate[index];
  field.removeAttribute('required');
  field.classList.add('validate');
  field.setAttribute('data-validate', 'required');
}

const emailInput = document.getElementById('email');

emailInput.setAttribute('data-validate', 'required,email');
console.log(emailInput.outerHTML);

const startDate = document.getElementById('start-date');
const submitButton = document.getElementById('submit-resume');
const p = document.querySelector('p');

startDate.id = 'datepicker';
const picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'DD/MM/YYYY',
});

function generateResume(event) {
  validation.init(form);
  validation.highlight(form);
  // validation.show(p, 'Favor preencher todos os campos');
}

submitButton.addEventListener('click', generateResume);


