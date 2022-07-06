from abc import ABC, abstractmethod


class FiguraGeometrica(ABC):
    @abstractmethod
    def area(self):
        raise NotImplementedError

    def perimetro(self):
        raise NotImplementedError
