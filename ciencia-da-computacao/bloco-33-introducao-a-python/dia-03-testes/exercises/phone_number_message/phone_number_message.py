import re


def encode(char):
    encoder = {
      '2': 'ABC',
      '3': 'DEF',
      '4': 'GHI',
      '5': 'JKL',
      '6': 'MNO',
      '7': 'PQRS',
      '8': 'TUV',
      '9': 'WXYZ'
    }

    for number, letters in encoder.items():
        if char in letters:
            return number

    return char


def encode_message_in_phone_number(message):
    if not 1 < len(message) <= 30:
        raise ValueError('Message must be between 1 and 30 characters')

    encoded_message = ''
    valid_characters = re.compile('[A-Z0-1-]')

    for char in message.upper():
        if not valid_characters.match(char):
            raise ValueError(f'Invalid character: {char}')
        encoded_message += encode(char)

    return encoded_message
