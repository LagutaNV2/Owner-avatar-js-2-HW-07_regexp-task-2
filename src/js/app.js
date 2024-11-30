// TODO: write your code here
// Приводит номер телефона к формату +<код страны><номер>

export default class PhoneNumberFormatter {
  // Статический метод для форматирования номера
  static format(phoneNumber) {
    // Убираем все символы, кроме цифр и плюса
    let cleaned = phoneNumber.replace(/[^+\d]/g, '');

    // Убираем все плюсы, кроме первого
    if (cleaned.startsWith('+')) {
      cleaned = '+' + cleaned.replace(/[+]/g, '');
    } else {
      cleaned = cleaned.replace(/[+]/g, '');
    }

    // Если номер начинается с 8 (для России), возвращаем с кодом +7
    if (cleaned.startsWith('8')) {
      cleaned = '+7' + cleaned.slice(1);
    }

    const formatedNumber = cleaned.match(/\+\d{10,}/);

    if (formatedNumber !== null) {
      return formatedNumber[0];
    } else {
      throw new Error('Некорректный номер телефона');
    }
  }
}
