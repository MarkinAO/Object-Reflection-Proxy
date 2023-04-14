export default function orderByProps(object, sortRules) {
  if(!object) {
    throw new Error('Функция вызвана без объекта!')
  }
  let sort = sortRules ? sortRules : []
  
  let defaultSorting = []
  let customSorting = []

  for (const key in object) {
    if (sort.includes(key)) {
      customSorting[sort.findIndex(element => element === key)] = {'key': key, value: object[key]}
    } else {
      defaultSorting.push({'key': key, value: object[key]})
    }    
  }

  defaultSorting.sort((a, b) => a.key.localeCompare(b.key))
  return [...customSorting, ...defaultSorting]
}
