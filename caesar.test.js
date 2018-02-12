const caesar = require("./caesar");

test("works with single letters", () => {
  expect(caesar("A", 1)).toEqual("B");
});
test("works with words", () => {
  expect(caesar("Aaa", 1)).toEqual("Bbb");
});
test("works with phrases", () => {
  expect(caesar("Hello, World!", 5)).toEqual("Mjqqt, Btwqi!");
});
test("works with negative shift", () => {
  expect(caesar("Mjqqt, Btwqi!", -5)).toEqual("Hello, World!");
});
test("wraps", () => {
  expect(caesar("Z", 1)).toEqual("A");
});
test("works with large shift factors", () => {
  expect(caesar("Hello, World!", 75)).toEqual("Ebiil, Tloia!");
});
