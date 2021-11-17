const TASK_SELECTED = '.task-selected';

function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');
  
  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
  
    weekDaysList.appendChild(dayListItem);
  }
}
  
createDaysOfTheWeek();

/*
Exercício 6:
Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
Dica - Propriedade: event.target .
*/
function zoomIn({ target }) {
  const { style } = target;
  style.fontSize = '24px';
}

function zoomOut({ target }) {
  const { style } = target;
  style.fontSize = '20px';
}

/*
Exercício 10:
Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .
*/
function toggleTaskToDay({ target }) {
  const { style, classList } = target;
  const selectedTask = document.querySelector(TASK_SELECTED);

  if (selectedTask) {
    classList.replace('dayFree', 'busyDay');
    style.color = selectedTask.style.backgroundColor;
  } else {
    classList.replace('busyDay', 'dayFree');
    style.color = 'rgb(119,119,119)';
  }
}

/*
Exercício 1:
O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
*/
function createDecemberDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
    14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const holidays = [24, 25, 11];
  const fridays = [4, 11, 18, 25];
  const daysList = document.getElementById('days');

  dezDaysList.forEach((dezDay) => {
    const day = document.createElement('li');

    day.innerText = dezDay;
    day.className = 'day';
    day.classList.add('dayFree');
    if (holidays.includes(dezDay)) day.classList.add('holiday');
    if (fridays.includes(dezDay)) day.classList.add('friday');
    
    day.style.cursor = 'default';
    day.addEventListener('mouseenter', zoomIn);
    day.addEventListener('mouseleave', zoomOut);
    day.addEventListener('click', toggleTaskToDay);
    
    daysList.appendChild(day);
  });
}

createDecemberDays();

/*
Exercício 3:
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
*/
let holidaysOn = false;

function colorHolidayText(holiday) {
  const { classList } = holiday;
  if (!holidaysOn) return 'rgb(179,0,12)';
  if (classList.contains('dayFree')) return 'rgb(119,119,119)';
  if (classList.contains('busyDay')) return document.querySelector(TASK_SELECTED).backgroundColor;
}

function toggleHolidays() {
  const holidays = document.querySelectorAll('.holiday');

  holidays.forEach((holiday) => {
    const { style } = holiday;
    style.backgroundColor = holidaysOn ? 'rgb(238,238,238)' : 'rgb(13, 89, 1)';
    style.color = colorHolidayText(holiday);
  });

  holidaysOn = !holidaysOn;
}

/*
Exercício 2:
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/
const buttonsContainer = document.querySelector('.buttons-container');

function createHolidayButton(holidayStr) {
  const holidayButton = document.createElement('button');
  holidayButton.innerText = holidayStr;
  holidayButton.id = 'btn-holiday';
  buttonsContainer.appendChild(holidayButton);

  holidayButton.addEventListener('click', toggleHolidays);
}

createHolidayButton('Feriados');

/*
Exercício 5:
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
*/
let fridaysOn = false;
const fridays = document.querySelectorAll('.friday');
const originalFridays = [];

for (let i = 0; i < fridays.length; i += 1) {
  originalFridays.push(fridays[i].innerText); 
}
    
function toggleFridays() {
  for (let i = 0; i < fridays.length; i += 1) {
    fridays[i].innerText = fridaysOn ? originalFridays[i] : 'IT\'S FRIDAY THEN';
  }
  
  fridaysOn = !fridaysOn;
}

/*
Exercício 4:
Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/
function createFridayButton(fridayStr) {
  const fridayButton = document.createElement('button');
  fridayButton.innerText = fridayStr;
  fridayButton.id = 'btn-friday';
  buttonsContainer.appendChild(fridayButton);

  fridayButton.addEventListener('click', toggleFridays);
}

createFridayButton('Sexta-feira');

/*
Exercício 7:
Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/
const taskList = document.querySelector('.my-tasks');

function addTask(taskStr) {
  const task = document.createElement('span');
  task.innerText = taskStr;
  taskList.appendChild(task);
}

addTask('Terminar exercícios do dia');

/*
Exercício 9:
Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
*/
let taskSelected = false;

function selectTask() {
  if (taskSelected) {
    const taskSelector = document.querySelector(TASK_SELECTED);
    taskSelector.className = 'task';
    taskSelector.previousElementSibling.style.textDecoration = 'none';
  } else {
    const taskSelector = document.querySelector('.task');
    taskSelector.className = 'task-selected';
    taskSelector.previousElementSibling.style.textDecoration = 'underline';
  }

  taskSelected = !taskSelected;
}

/*
Exercício 8:
Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/
function addLabel(colorStr) {
  const label = document.createElement('div');
  label.className = 'task';
  label.style.backgroundColor = colorStr;
  taskList.appendChild(label);
  label.addEventListener('click', selectTask);
}

addLabel('rgb(182, 160, 84)');

/*
Bônus:
Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
Ao pressionar a tecla "enter" o evento também deverá ser disparado.
Dica - Propriedade: keyCode .
*/

function addAppointment() {
  const input = document.getElementById('task-input');
  const appointmentList = document.querySelector('.appointment-list-container');

  if (input.value === '') {
    alert('Favor escrever um compromisso');
  } else {
    const appointment = document.createElement('p');
    appointment.innerText = input.value;
    appointmentList.appendChild(appointment);
    input.value = '';
  }
}

const appointmentButton = document.getElementById('btn-add');
const input = document.getElementById('task-input');

appointmentButton.addEventListener('click', addAppointment);
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addAppointment();
  }
});