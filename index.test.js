const birthday = require('./index');

describe('Determines age based on birthday', () => {
  let DateSave;
  beforeAll(() => {
    // Save original date module
    DateSave = Date;
  });

  afterAll(() => {
    // Reset Date
    Date = DateSave; // eslint-disable-line
  });

  beforeEach(() => {
    // Set a fixed date
    Date.now = jest.fn(() => new Date('01 Jan 2018').valueOf());
  });

  test('Returns 0 if birthday is today', () => {
    expect(birthday.howOld(new Date('01 Jan 2018'))).toBe(0);
  });
  test('Returns 1 if birthday is a year after', () => {
    expect(birthday.howOld(new Date('01 Jan 2017'))).toBe(1);
  });
  test('Returns 0 if birthday is just under a year', () => {
    expect(birthday.howOld(new Date('10 Jan 2017'))).toBe(0);
  });
  test('Returns 1 if birthday is just after a year', () => {
    expect(birthday.howOld(new Date('01 Jan 2017'))).toBe(1);
  });
});
