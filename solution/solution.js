function solution(phone_number) {
  const length = phone_number.length;

  const maskedNumbers = '*'.repeat(length - 4);

  const lastFourNumbers = phone_number.slice(-4);

  return maskedNumbers + lastFourNumbers;
}
