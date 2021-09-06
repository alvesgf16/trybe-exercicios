// 3. Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

let clickCount = 0;
let counter = document.querySelector('p');
counter.innerText = clickCount;

document.querySelector('button').addEventListener('click', () => counter.innerText = clickCount += 1);