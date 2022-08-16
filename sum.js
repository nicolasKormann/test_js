import promptSync from 'prompt-sync';

const sum = () => {
  const prompt = promptSync();
  let num = prompt('Escolha um número: ');
  const divisibilis = new Array();

  for(let i = num - 1; i > 0; i--) {
    if (i % 3 == 0 || i % 5 == 0) {
      divisibilis.push(i);
    }
  }

  const sum = divisibilis.reduce((value, element) => value += element);
  return sum;
}

export { sum };