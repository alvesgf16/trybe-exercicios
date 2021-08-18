const stateSelector = document.getElementById('state-selector');

const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

for (let index = 0; index < states.length; index += 1) {
  const state = states[index];
  const stateOption = document.createElement('option');
  
  stateOption.value = state.toLowerCase();
  stateOption.innerText = state;

  stateSelector.appendChild(stateOption);
}
