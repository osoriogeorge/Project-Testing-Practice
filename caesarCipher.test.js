const caesarCipher = require("./caesarCipher");

test.skip("Encrypts a string with a shift of 1", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
});

test.skip("Encrypts a string with a shift of 3", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test.skip("Handles uppercase and lowercase letters", () => {
  expect(caesarCipher("AbCd", 1)).toBe("BcDe");
});

test.skip("Handles non-alphabetic characters", () => {
  expect(caesarCipher("abc!123", 1)).toBe("bcd!123");
});

test.skip("Handles empty strings", () => {
  expect(caesarCipher("", 1)).toBe("");
});

test.skip("Handles large shifts", () => {
  expect(caesarCipher("abc", 27)).toBe("bcd"); // Shift of 27 is the same as 1
});

test.skip("Handles negative shifts", () => {
  expect(caesarCipher("bcd", -1)).toBe("abc");
});

test.skip("Handles numbers", () => {
  expect(caesarCipher("123", 3)).toBe("123");
});
