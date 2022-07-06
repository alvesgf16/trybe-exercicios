from ManipuladorDeLog import ManipuladorDeLog


class LogEmArquivo(ManipuladorDeLog):
    @classmethod
    def log(cls, mensagem):
        with open('log.txt', 'a') as arquivo:
            print(mensagem, file=arquivo)
