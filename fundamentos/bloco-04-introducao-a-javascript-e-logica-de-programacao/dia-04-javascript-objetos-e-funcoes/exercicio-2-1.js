// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false

function verificaPalindrome(word) {
    let reversedWord = word.split("").reverse().join("");
    if (reversedWord === word) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}

verificaPalindrome('arara');