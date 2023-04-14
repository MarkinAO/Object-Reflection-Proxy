export default function orderByProps(object, sortRules) {
  if (!object) {
    throw new Error('Функция вызвана без объекта!');
  }
  const sort = sortRules || [];

  const defaultSorting = [];
  const customSorting = [];

  for (const key in object) {
    if (sort.includes(key)) {
      customSorting[sort.findIndex((element) => element === key)] = { key, value: object[key] };
    } else {
      defaultSorting.push({ key, value: object[key] });
    }
  }

  defaultSorting.sort((a, b) => a.key.localeCompare(b.key));
  return [...customSorting, ...defaultSorting];
}
