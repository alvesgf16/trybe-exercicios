from fizzbuzz import fizzbuzz


def test_fizzbuzz_returns_a_list():
    "Para um número ímpar a função deve retornar o valor True"
    assert type(fizzbuzz(5)) is list


def test_fizzbuzz_returns_fizz_when_number_divisible_by_3():
    "Números divisíveis por 3 devem aparecer como 'Fizz' ao invés do número"
    assert fizzbuzz(3)[-1] == "Fizz"


def test_fizzbuzz_returns_buzz_when_number_divisible_by_5():
    "Números divisíveis por 5 devem aparecer como 'Buzz' ao invés do número"
    assert fizzbuzz(5)[-1] == "Buzz"


def test_fizzbuzz_returns_fizzbuzz_when_number_divisible_by_3_and_5():
    "Números divisíveis por 3 e 5 devem aparecer como 'FizzBuzz' ao invés do "\
        "número"
    assert fizzbuzz(15)[-1] == "FizzBuzz"
