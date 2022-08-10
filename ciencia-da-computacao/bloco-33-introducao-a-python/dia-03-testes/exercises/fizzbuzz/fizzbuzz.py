def isDivisibleBy5(number, ifTrue, ifFalse):
    if number % 5 == 0:
        return ifTrue

    return ifFalse


def fizzbuzz(n):
    fizzbuzz_sequence = []

    for i in range(1, n + 1):
        if i % 3 == 0:
            fizzbuzz_sequence.append(isDivisibleBy5(i, 'FizzBuzz', 'Fizz'))
        else:
            fizzbuzz_sequence.append(isDivisibleBy5(i, 'Buzz', i))

    return fizzbuzz_sequence
