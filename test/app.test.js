const suma = (a, b) => a + b;

test("2 + 2 = 4", () => {
  expect(suma(2, 2)).toBe(4);
});

test("5 + 7 = 12", () => {
  expect(suma(5, 7)).toBe(12);
});
