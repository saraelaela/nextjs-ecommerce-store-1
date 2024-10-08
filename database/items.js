export const items = [
  { id: 1, name: 'Item1', icon: '🍎' },
  { id: 2, name: 'Item2', icon: '🍌' },
  { id: 3, name: 'Item3', icon: '🥝' },
  { id: 4, name: 'Item4', icon: '🍓' },
];

export function getItems() {
  return items;
}

export function getItem(id) {
  return items.find((item) => item.id === id);
}
