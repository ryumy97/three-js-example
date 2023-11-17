import tunnel from 'tunnel-rat';

export const r3f = tunnel();
export const getRandomItem = <T>(array: T[]): T => {
  const index = Math.floor(Math.random() * array.length);

  return array.at(index);
};
