const encoder = {
  a: '1',
  e: '2',
  i: '3',
  o: '4',
  u: '5',
};

const encodeCharacter = (character) => (
  Object.keys(encoder).some((key) => key === character)
    ? encoder[character] : character
);

const encode = (string) => string.split('')
  .map((character) => encodeCharacter(character)).join('');

const decodeCharacter = (character) => (
  Object.values(encoder).some((value) => value === character)
    ? Object.keys(encoder).find((key) => encoder[key] === character) : character
);

const decode = (string) => string.split('')
  .map((character) => decodeCharacter(character)).join('');

console.log(decode('H4w 1r2 y45 t4d1y?'));
  
module.exports = {
  decode,
  encode,
};