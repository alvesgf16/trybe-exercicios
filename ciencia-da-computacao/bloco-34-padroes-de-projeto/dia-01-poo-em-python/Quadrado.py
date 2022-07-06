from FiguraGeometrica import FiguraGeometrica


class Quadrado(FiguraGeometrica):
    def __init__(self, lado):
        self.__lado = lado

    def area(self):
        return self.__lado ** 2

    def perimetro(self):
        return self.__lado * 4
