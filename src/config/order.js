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
  { value: ORDER_KEYS.RANDOM, label: 'random' },
  { value: ORDER_KEYS.ASCENDING, label: 'ascending' },
  { value: ORDER_KEYS.DESCENDING, label: 'descending' },
];
