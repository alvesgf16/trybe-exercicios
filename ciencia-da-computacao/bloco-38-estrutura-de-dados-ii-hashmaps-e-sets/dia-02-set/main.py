from Conjunto import Conjunto


conjunto = Conjunto()

for number in [0, 10, 100, 1000]:
    conjunto.add(number)

print(conjunto)
print(0 in conjunto)
print(1 in conjunto)

conjuntoA = Conjunto()
conjuntoB = Conjunto()

for number in range(1, 11):
    conjuntoA.add(number)

for number in range(10, 21):
    conjuntoB.add(number)

print(conjuntoA.union(conjuntoB))
