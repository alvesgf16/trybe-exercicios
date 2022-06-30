import sys
import json  # json é um modulo que vem embutido, porém precisamos importá-lo
import csv


def imprimir_nome_na_vertical():
    nome = input("Qual o seu nome? ")

    for letra in nome:
        print(letra)


def somar_numeros():
    numeros_input = input(
        "Digite os números a serem somados, separando-os por espaços: "
    )

    numeros = numeros_input.split()
    soma = 0

    for numero in numeros:
        if not numero.isdigit():
            return print(
                f"Erro ao somar valores, {numero} é um valor inválido",
                file=sys.stderr,
            )

        soma += int(numero)

    print(soma)


def impressoes_desempacotadas():
    a, b = "cd"
    print(a)  # saída: c
    print(b)  # saída: d

    # Quando um * está presente no desempacotamento, os valores são
    # desempacotados em formato de lista.
    head, *tail = (
        1,
        2,
        3,
    )
    print(head)  # saída: 1
    print(tail)  # saída: [2, 3]


def tente_entrar_com_um_numero():
    while True:
        try:
            int(input("Please enter a number: "))
            break
        except ValueError:
            print("Oops!  That was no valid number.  Try again...")


def listar_reprovados():
    with open("notas.txt", "r") as notas:
        for line in notas:
            nome, nota = line.split()
            if int(nota) < 6:
                with open("reprovados.txt", "a") as reprovados:
                    print(nome, file=reprovados)

    with open("reprovados.txt", "r") as reprovados:
        for line in reprovados:
            print(line)


def manipular_json_com_pokemon():
    with open("pokemons.json") as file:
        # content = file.read()  # leitura do arquivo
        # # o conteúdo é transformado em estrutura python equivalente,
        # # dicionário neste caso. acessamos a chave results que é onde contém
        # # nossa lista de pokemons
        # pokemons = json.loads(content)["results"]
        pokemons = json.load(file)["results"]

    # Leitura de todos os pokemons
    with open("pokemons.json") as file:
        pokemons = json.load(file)["results"]

    # print(pokemons[0])  # imprime o primeiro pokemon da lista

    # Separamos somente os do tipo grama
    grass_type_pokemons = [
        pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
    ]

    # Abre o arquivo para escrevermos apenas o pokemons do tipo grama
    with open("grass_pokemons.json", "w") as file:
        # json_to_write = json.dumps(
        #     grass_type_pokemons
        # )  # conversão de Python para o formato json (str)
        # file.write(json_to_write)
        # escreve no arquivo já transformando em formato json a estrutura
        json.dump(grass_type_pokemons, file)


# lê os dados
with open("graduacao_unb.csv", encoding="utf-8") as file:
    # graduacao_reader = csv.reader(file, delimiter=",", quotechar='"')
    # # Usando o conceito de desempacotamento
    # header, *data = graduacao_reader
    graduacao_reader = csv.DictReader(file, delimiter=",", quotechar='"')

    # print(data)

    # a linha de cabeçalhos é utilizada como chave do dicionário
    # agrupa cursos por departamento
    group_by_department = {}
    # for row in data:
    for row in graduacao_reader:
        # department = row[15]
        department = row["unidade_responsavel"]
        if department not in group_by_department:
            group_by_department[department] = 0
        group_by_department[department] += 1

    # Escreve o relatório em .csv
    # Abre um arquivo para escrita
with open("department_report.csv", "w", encoding="utf-8") as file:
    # writer = csv.writer(file)

    # Escreve o cabeçalho
    # os valores a serem escritos devem ser dicionários
    headers = [
        "Departamento",
        "Total de Cursos",
    ]
    # writer.writerow(headers)
    # É necessário passar o arquivo e o cabeçalho
    writer = csv.DictWriter(file, fieldnames=headers)
    writer.writeheader()

    # Escreve as linhas de dados
    # Desempacotamento de valores
    for department, grades in group_by_department.items():
        # Agrupa o dado com o turno
        # row = [
        #     department,
        #     grades,
        # ]
        row = {"Departamento": department, "Total de Cursos": grades}
        writer.writerow(row)
