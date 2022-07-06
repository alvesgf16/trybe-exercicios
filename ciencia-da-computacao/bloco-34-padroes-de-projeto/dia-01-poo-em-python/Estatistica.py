from collections import Counter


class Estatistica:
    @classmethod
    def media(cls, numeros):
        return sum(numeros) / len(numeros)

    @classmethod
    def mediana(cls, numeros):
        numeros.sort()

        index = len(numeros) // 2

        if len(numeros) % 2 == 0:
            return (numeros[index] + numeros[index - 1]) / 2

        return numeros[index]

    @classmethod
    def moda(cls, numeros):
        numero, _ = Counter(numeros).most_common()[0]

        return numero
