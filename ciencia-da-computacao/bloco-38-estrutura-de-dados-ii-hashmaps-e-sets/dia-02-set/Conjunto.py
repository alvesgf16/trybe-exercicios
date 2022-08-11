class Conjunto:
    def __init__(self):
        self.conjunto = [False for _ in range(1001)]

    def add(self, item):
        self.conjunto[item] = True
