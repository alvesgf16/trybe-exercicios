from numpy import pi
from FiguraGeometrica import FiguraGeometrica


class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        self.__raio = raio

    def area(self):
        return pi * self.__raio ** 2

    def perimetro(self):
        return 2 * pi * self.__raio
