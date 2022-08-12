from Conjunto import Conjunto

estudantes = [1, 2, 3, 4, 5, 6, 7]
conjunto_estudantes = Conjunto()
for estudante in estudantes:
    conjunto_estudantes.add(estudante)

lista1_entregues = [1, 4, 7, 3]
conjunto_lista1 = Conjunto()
for estudante in lista1_entregues:
    conjunto_lista1.add(estudante)

lista2_entregues = [3, 1, 6]
conjunto_lista2 = Conjunto()
for estudante in lista2_entregues:
    conjunto_lista2.add(estudante)

if conjunto_lista1.issubset(conjunto_estudantes) and conjunto_lista2.issubset(
    conjunto_estudantes
):
    # Quem ainda não entregou a lista1?
    print(conjunto_estudantes.difference(conjunto_lista1))

    # Quem já entregou as duas listas?
    print(conjunto_lista1.intersection(conjunto_lista2))

    # Quem já entregou qualquer uma das duas listas?
    print(conjunto_lista1.union(conjunto_lista2))

    # Quem ainda não entregou nenhuma das listas?
    print(
        conjunto_estudantes.difference(conjunto_lista1.union(conjunto_lista2))
    )
