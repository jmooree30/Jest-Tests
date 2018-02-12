const arrayAnalysis = require("./array");
const object = arrayAnalysis([1, 2, 3, 4, 5]);

test("returns the length of the array", () => {
  expect(object.length).toBe(5);
});

test("returns the smallest value in an array", () => {
  expect(object.min).toBe(1);
});

test("returns the largest value in an array", () => {
  expect(object.max).toBe(5);
});

test("return the average value of an array", () => {
  expect(object.average).toBe(3)
})