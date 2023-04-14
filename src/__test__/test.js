import orderByProps from '../js/main';

test('Test orderByProps', () => {
  const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}
  
  let res = [
    {key: "name", value: "мечник"}, // порядок взят из массива с ключами
    {key: "level", value: 2}, // порядок взят из массива с ключами
    {key: "attack", value: 80}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
    {key: "defence", value: 40}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
    {key: "health", value: 10} // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
  ]
  expect(orderByProps(obj, ["name", "level"])).toEqual(res);

  res = [    
    {key: "attack", value: 80},
    {key: "defence", value: 40},
    {key: "health", value: 10},
    {key: "level", value: 2},
    {key: "name", value: "мечник"}
  ]
  expect(orderByProps(obj)).toEqual(res);

  res = [    
    {key: "health", value: 10},
    {key: "attack", value: 80},
    {key: "defence", value: 40},
    {key: "name", value: "мечник"},
    {key: "level", value: 2}    
  ]
  expect(orderByProps(obj, ["health", "attack", "defence", "name", "level"])).toEqual(res);

  expect(() => {
    orderByProps()
  }).toThrow('Функция вызвана без объекта!');
});

