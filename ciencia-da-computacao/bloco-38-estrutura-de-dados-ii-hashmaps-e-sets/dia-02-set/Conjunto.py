class Conjunto:
    def __init__(self):
        self.conjunto = [False for _ in range(1001)]

    def __str__(self):
        return str(
            [index for index, value in enumerate(self.conjunto) if value]
        )

    def add(self, item):
        self.conjunto[item] = True
