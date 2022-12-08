export const chunk = <T>(array: T[], group: number) => {
  const chunkedArray = [];

  let i = 0;
  while (i < array.length) {
    chunkedArray.push(array.slice(i, i + group));
    i += group;
  }

  return chunkedArray;
};
