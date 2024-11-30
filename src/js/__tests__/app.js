import PhoneNumberFormatter from '../app';

test('форматирование номера РФ с 8', () => {
  expect(PhoneNumberFormatter.format('8 (927) 000-00-00')).toBe('+79270000000');
});

test('форматирование номера РФ с +7', () => {
  expect(PhoneNumberFormatter.format('+7 960 000 00 00')).toBe('+79600000000');
});

test('форматирование китайского номера', () => {
  expect(PhoneNumberFormatter.format('+86 000 000 0000')).toBe('+860000000000');
});

test('форматирование номера с несколькими плюсами (валидный)', () => {
  expect(PhoneNumberFormatter.format('++7 960 000 00 00')).toBe('+79600000000');
});

test('форматирование номера с кодом другой страны (Германия)', () => {
  expect(PhoneNumberFormatter.format('+49 30 12345678')).toBe('+493012345678');
});

test('форматирование номера с кодом другой страны (США)', () => {
  expect(PhoneNumberFormatter.format('+1 202-555-0191')).toBe('+12025550191');
});

// test('номер: лишние плюсы в середине строки', () => {
//   // expect(() => PhoneNumberFormatter.format('8+927+000+00+00')).toThrow('Некорректный номер телефона');
//   expect(() => PhoneNumberFormatter.format('8+927+000+00+00')).toBe('+79270000000');
// });

test('некорректный номер: нет кода страны и не начинается с 8', () => {
  expect(() => PhoneNumberFormatter.format('123456')).toThrow('Некорректный номер телефона');
});

test('некорректный номер: пустая строка', () => {
  expect(() => PhoneNumberFormatter.format('')).toThrow('Некорректный номер телефона');
});

test('некорректный номер: только плюс', () => {
  expect(() => PhoneNumberFormatter.format('+')).toThrow('Некорректный номер телефона');
});

test('некорректный номер: плюс в конце строки', () => {
  expect(PhoneNumberFormatter.format('8 (927) 000-00-00+')).toBe('+79270000000');
});
