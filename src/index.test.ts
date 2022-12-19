import { validate } from '.';

describe('validate()', () => {
  it('validate length', () => {
    expect(validate('')).toBe(false);
    expect(validate('Bob')).toBe(false);
  });

  it('validate pattern', () => {
    expect(validate('91350505MA32AE2D6Z')).toBe(false);
    expect(validate('91350505MA32AE2D6V')).toBe(false);
  });

  it('validate checksum', () => {
    expect(validate('91350505MA32AE2D68')).toBe(false);
    expect(validate('93350524593466059X')).toBe(false);

    expect(validate('91350505MA32AE2D67')).toBe(true);
    expect(validate('93350524593466059U')).toBe(true);
  });
});
