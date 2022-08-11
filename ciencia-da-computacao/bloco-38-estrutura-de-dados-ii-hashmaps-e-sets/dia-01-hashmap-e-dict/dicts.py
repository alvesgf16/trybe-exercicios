double_dict = {number: number * 2 for number in range(3, 21)}

double_or_triple = {
    number: number * 2 if number % 2 == 0 else number * 3
    for number in range(3, 21)
}

# Para cada char na string:
# 	- Se o char não estiver no dicionário, inclua com o valor 1;

# 	- Se estiver, incremente o valor.


# # Exemplo:

# str = "bbbbaaaacccaaaaaaddddddddccccccc"
# # saída: {'b': 4, 'a': 10, 'c': 10, 'd': 8}

# str = "coxinha"
# # saída: {'c': 1, 'o': 1, 'x': 1, 'i': 1, 'n': 1, 'h': 1, 'a': 1}
# # Explicação: Nenhuma letra repete em coxinha :)


def char_dict(str):
    response = {}
    for char in str:
        response[char] = response[char] + 1 if char in response else 1

    return response
