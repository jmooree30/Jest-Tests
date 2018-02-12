const capitalize = require('./capitalize');

test('capitalizes the first letter in a string', () => {
  expect(capitalize("string")).toBe("String");
});

test('capitalizes the first letter in a string', () => {
  expect(capitalize(" string")).toBe(" string");
});