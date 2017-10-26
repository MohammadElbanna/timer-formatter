const formatElapsedTime = require("./index");

test("Not passing any arguments should return 00:00:00", () => {
  expect(formatElapsedTime()).toBe("00:00:00");
});

test("passing null should return 00:00:00", () => {
  expect(formatElapsedTime(null)).toBe("00:00:00");
});

test("passing 0 should return 00:00.00", () => {
  expect(formatElapsedTime(0)).toBe("00:00.00");
});

test("passing 129100 should return 02:09.10", () => {
  expect(formatElapsedTime(129100)).toBe("02:09.10");
});

test("passing 100000000 should return 27:46:40.00", () => {
  expect(formatElapsedTime(100000000)).toBe("27:46:40.00");
});

test("passing negative numbers should return 00:00.00", () => {
  expect(formatElapsedTime(100000000)).toBe("27:46:40.00");
});

test("passing 120000 should return 02:00.00", () => {
  expect(formatElapsedTime(120000)).toBe("02:00.00");
});
