from FiguraGeometrica import FiguraGeometrica


class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura):
        self.__base = base
        self.__altura = altura

    def area(self):
        return self.__base * self.__altura

    def perimetro(self):
        return (self.__base + self.__altura) * 2
