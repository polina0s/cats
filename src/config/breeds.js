const BREEDS_KEYS = {
  RANDOM: 'random',
  BREEDS: 'breeds',
  NO_BREEDS: 'no_breeds',
};

export const BREEDS_MAP = new Map([
  [BREEDS_KEYS.RANDOM, null],
  [BREEDS_KEYS.NO_BREEDS, 0],
  [BREEDS_KEYS.BREEDS, 1],
]);

export const BREEDS_OPTIONS = [
  { value: BREEDS_KEYS.RANDOM, label: 'random' },
  { value: BREEDS_KEYS.BREEDS, label: 'with breed' },
  { value: BREEDS_KEYS.NO_BREEDS, label: 'without breed' },
];
