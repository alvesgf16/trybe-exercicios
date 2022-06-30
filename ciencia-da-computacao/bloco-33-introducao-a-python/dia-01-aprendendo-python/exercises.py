def return_the_bigger(a, b):
    if a > b:
        return a
    else:
        return b


def get_average(*numbers):
    sum = 0

    for number in numbers:
        sum += number

    return sum / len(numbers)


def draw_square(side_length):
    for i in range(side_length):
        print("*" * side_length)


def get_longest_name(names):
    longest_name = names[0]

    for name in names:
        if len(name) > len(longest_name):
            longest_name = name

    return longest_name


def get_amount_and_value_of_paint_cans(wall_area):
    liters_of_paint = wall_area / 3
    number_of_paint_cans = (
        liters_of_paint // 18
        if liters_of_paint % 18 == 0
        else liters_of_paint // 18 + 1
    )
    total_value_of_paint_cans = number_of_paint_cans * 80

    return [number_of_paint_cans, total_value_of_paint_cans]


def get_triangle_type(sides):
    biggest_side = 0

    for side in sides:
        if side > biggest_side:
            biggest_side = side

    sides.remove(biggest_side)
    sides.sort()

    if biggest_side > sum(sides):
        return "não é triângulo"

    if biggest_side == sides[0]:
        return "equilátero"

    if biggest_side == sides[1] or sides[0] == sides[1]:
        return "isósceles"

    return "escaleno"


def get_smallest_number(numbers):
    smallest_number = numbers[0]

    for number in numbers:
        if number < smallest_number:
            smallest_number = number

    return smallest_number


def draw_rectangle_triangle(base_length):
    for i in range(base_length):
        for j in range(base_length):
            if j <= i:
                print("*", end="")
        print()


def get_sum_of_numbers_until_number(number):
    sum = 0

    for number in range(number + 1):
        sum += number

    return sum


def get_fuel_cost(quantity, type):
    if type == "A":
        base_cost = quantity * 1.9
        if quantity < 20:
            return base_cost * 0.3
        return base_cost * 0.5
    elif type == "G":
        base_cost = quantity * 2.5
        if quantity < 20:
            return base_cost * 0.4
        return base_cost * 0.6
