export const ORDER_KEYS = {
  RANDOM: 'random',
  ASCENDING: 'ascending',
  DESCENDING: 'descending',
};

export const ORDER_MAP = new Map([
  [ORDER_KEYS.RANDOM, 'RAND'],
  [ORDER_KEYS.ASCENDING, 'ASC'],
  [ORDER_KEYS.DESCENDING, 'DESC'],
]);

export const ORDER_OPTIONS = [
  { value: ORDER_KEYS.RANDOM, label: 'Random' },
  { value: ORDER_KEYS.ASCENDING, label: 'Ascending' },
  { value: ORDER_KEYS.DESCENDING, label: 'Descending' },
];
