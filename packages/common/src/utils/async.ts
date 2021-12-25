export const forEachAsync = async (
  data: any[],
  exec: (item: any, i: number) => void,
  i = 0,
): Promise<void> => {
  const item = data[i];

  if (item) {
    await exec(item, i);

    return forEachAsync(data, exec, i + 1);
  }
};
