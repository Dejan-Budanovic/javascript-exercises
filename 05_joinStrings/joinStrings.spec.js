const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Dejan', () => {
    expect(values.firstName).toEqual('Dejan');
  });
  test('lastName is Budanovic', () => {
    expect(values.lastName).toEqual('Budanovic');
  });
  test('thisYear is 2025', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test('birthYear is 1991', () => {
    expect(values.birthYear).toEqual(1991);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Dejan Budanovic and I am 34 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Dejan Budanovic', () => {
    expect(values.fullName).toEqual('Dejan Budanovic');
  });
  test('age is 34', () => {
    expect(values.age).toEqual(34);
  });
});

describe('step 4', () => {
  test('everythingIsOk', () => {
    expect(values.everythingIsOk).toEqual("Hello! My name is Dejan Budanovic and I am 34 years old. Yes. that's right Dejan Budanovic, 34");
  })
});