const pattern = /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/;
const charList = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  'M',
  'N',
  'P',
  'Q',
  'R',
  'T',
  'U',
  'W',
  'X',
  'Y',
];
const weightList = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28];

// Validate USCC string
// 校验统一社会信用代码字符串
export function validate(input: string): boolean {
  if (input.length !== 18) return false;
  if (!pattern.test(input)) return false;

  // Checksum
  let sum = 0;
  for (let i = 0; i < 17; i++) {
    const char = input.charAt(i);
    const num = charList.indexOf(char);
    sum += num * weightList[i]!;
  }
  if (charList[31 - (sum % 31)] !== input.charAt(17)) {
    return false;
  }

  return true;
}
