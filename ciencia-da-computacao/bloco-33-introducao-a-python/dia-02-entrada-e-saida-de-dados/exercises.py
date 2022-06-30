import csv
import json
import random


def draw_name_inverted_steps():
    name = input("Digite seu nome: ")

    while len(name) > 0:
        print(name)
        name = name[:-1]


def guess_the_scrambled_word():
    words = []

    with open("words.txt") as file:
        for line in file:
            words.append(line)

    word = random.choice(words)

    print("".join(random.sample(word, len(word))))

    attempts = 3

    while attempts > 0:
        guess = input("Digite a palavra: ")
        if guess == word:
            print("Parabéns, você acertou!")
            break
        else:
            print("Você errou!")
            attempts -= 1

    print(f"{word} era a palavra escondida")


def get_book_categories_percentages():
    with open("books.json") as src_file:
        books = json.load(src_file)

        group_by_category = {}
        for book in books:
            for category in book["categories"]:
                if category not in group_by_category:
                    group_by_category[category] = 0
                group_by_category[category] += 1

        with open("books.csv", "w", encoding="utf-8") as out_file:
            headers = ["categoria", "porcentagem"]

            writer = csv.writer(out_file)
            writer.writerow(headers)
            for category, count in group_by_category.items():
                row = [category, count / len(books) * 100]
                writer.writerow(row)


def guess_the_pokemon():
    with open("pokemons.json") as file:
        pokemons = json.load(file)["results"]
        pokemonNames = list(map(lambda x: x["name"].lower(), pokemons))

    pokemon = random.choice(pokemonNames)

    attempts = 0

    while True:
        guess = input("Quem é esse pokémon? ")
        if guess == pokemon:
            print(f"Sim, é {pokemon}!")
            break
        attempts += 1
        print(pokemon[:attempts])


guess_the_pokemon()
