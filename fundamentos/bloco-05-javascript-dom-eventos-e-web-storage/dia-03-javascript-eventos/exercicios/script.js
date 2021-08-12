function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();

/*
Exercício 1:
O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
*/

function createDecemberDays() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let daysList = document.getElementById('days');

    for (let i = 0; i < dezDaysList.length; i += 1) {
        let day = document.createElement('li');
        day.innerText = dezDaysList[i];
        day.className = 'day';

        if (day.innerText === '24' || day.innerText === '25' || day.innerText === '31') {
            day.classList.add('holiday');
        }

        if (day.innerText === '4' || day.innerText === '11' || day.innerText === '18' || day.innerText === '25') {
            day.classList.add('friday');
        }

        daysList.appendChild(day);
        day.addEventListener('mouseenter', zoomIn);
        day.addEventListener('mouseleave', zoomOut);
    }
}

createDecemberDays();

/*
Exercício 2:
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/

let buttonsContainer = document.querySelector('.buttons-container');

function createHolidayButton(string) {
    let holidayButton = document.createElement('button');
    holidayButton.innerText = string;
    holidayButton.id = 'btn-holiday';
    buttonsContainer.appendChild(holidayButton);

    holidayButton.addEventListener('click', toggleHolidays);
}

createHolidayButton('Feriados');

/*
Exercício 3:
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
*/
let holidaysOn = false;

function toggleHolidays() {
    let holidays = document.getElementsByClassName('holiday');

    if (holidaysOn) {
        for (let i = 0; i < holidays.length; i += 1) {
            holidays[i].style.backgroundColor = 'rgb(238,238,238)';
        }

        holidaysOn = false;
    } else {
        for (i = 0; i < holidays.length; i += 1) {
            holidays[i].style.backgroundColor = 'rgb(202, 197, 252)';
        }

        holidaysOn = true;
    }
}

/*
Exercício 4:
Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/

function createFridayButton(string) {
    let fridayButton = document.createElement('button');
    fridayButton.innerText = string;
    fridayButton.id = 'btn-friday';
    buttonsContainer.appendChild(fridayButton);

    fridayButton.addEventListener('click', toggleFridays);
}

createFridayButton('Sexta-feira');

/*
Exercício 5:
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
*/
let fridaysOn = false;
let fridays = document.getElementsByClassName('friday');
let originalFridays = [];

for (let i = 0; i < fridays.length; i += 1) {
    originalFridays.push(fridays[i].innerText); 
}
    
function toggleFridays() {
    if (fridaysOn) {
        for (let i = 0; i < fridays.length; i += 1) {
            fridays[i].innerText = originalFridays[i];
        }

        fridaysOn = false;
    } else {
        for (i = 0; i < fridays.length; i += 1) {
            fridays[i].innerText = "IT'S FRIDAY THEN";
        }

        fridaysOn = true;
    }
}

/*
Exercício 6:
Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
Dica - Propriedade: event.target .
*/
function zoomIn(event) {
    event.target.style.fontSize = '24px';
}

function zoomOut(event) {
    event.target.style.fontSize = '20px';
}