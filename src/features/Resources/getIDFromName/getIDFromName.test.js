import { getIDFromName } from "./getIDFromName";

test("that it returns a correctly formatted ID with a fully lowercase name", () => {
  const expectedID = "hello";
  const testName = "hello";
  expect(getIDFromName(testName)).toBe(expectedID);
});

test("that it returns a correctly formatted ID with a name starting with an uppercase value", () => {
  const expectedID = "matt";
  const testName = "Matt";
  expect(getIDFromName(testName)).toBe(expectedID);
});

test("that it returns a correctly formatted ID with a name containing multiple uppercase values", () => {
  const expectedID = "matthew";
  const testName = "MaTtHeW";
  expect(getIDFromName(testName)).toBe(expectedID);
});

test("that it returns a correctly formatted ID with a name containing all uppercase values", () => {
  const expectedID = "john";
  const testName = "JOHN";
  expect(getIDFromName(testName)).toBe(expectedID);
});

test("that it changes a space in a name to a -", () => {
  const expectedID = "matthew-nobes";
  const testName = "matthew nobes";
  expect(getIDFromName(testName)).toBe(expectedID);
});

test("that it changes multiple spaces in a name to -'s", () => {
  const expectedID = "matt-hew-no-bes";
  const testName = "matt hew no bes";
  expect(getIDFromName(testName)).toBe(expectedID);
});

test("that it changes a space in a name to a - and converts capitals to lowercase", () => {
  const expectedID = "john-smith";
  const testName = "John Smith";
  expect(getIDFromName(testName)).toBe(expectedID);
});

test("that it removes any starting space values", () => {
  const expectedID = "smith";
  const testName = " Smith";
  expect(getIDFromName(testName)).toBe(expectedID);
});

test("that it removes any ending space values", () => {
  const expectedID = "smith";
  const testName = "Smith ";
  expect(getIDFromName(testName)).toBe(expectedID);
});
