function isBiggerThan50(a, b, c) {
  return new Promise((resolve, reject) => {
    const params = Array.of(a, b, c);
    if (params.some((param) => typeof param !== 'number')) return (
      reject('Informe apenas números')
    );
    const result = ((a + b) * c);
    if (result < 50) return reject('Valor muito baixo');
    resolve(result);
  });
}

async function checkNumbers() {
  try {
    const args = Array.from({ length: 3 }, () => Math.floor(Math.random() * 100 + 1));
    const result = await isBiggerThan50(...args);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

