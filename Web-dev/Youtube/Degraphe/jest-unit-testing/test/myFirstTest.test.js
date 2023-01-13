/*
test("1 plus 1 should be equal to 2", () => {
  let a = 1;
  let b = 1;
  expect(a + b).toBe(2);
});

test("5 plus 6 is not equal to 10", () => {
  let a = 5;
  let b = 6;
  expect(a + b).not.toBe(10);
  // expect(a + b).not.toBe(11);
});
*/
describe("Number operation", () => {
  test("1 plus 1 should be equal to 2", () => {
    let a = 1;
    let b = 1;
    expect(a + b).toBe(2);
  });

  test("5 plus 6 is not equal to 10", () => {
    let a = 5;
    let b = 6;
    expect(a + b).not.toBe(10);
    // expect(a + b).not.toBe(11);
  });
});

describe("Testing other matcher methods", () => {
  test("Testing that a variable is undefined", () => {
    let number = undefined;
    // let number = null;

    expect(number).not.toBeDefined();
    expect(number).toBeUndefined();

    // Even though the number is undefined not null
    expect(number).not.toBeNull();
    expect(number).toBeFalsy();
    expect(number).not.toBeTruthy();
  });
  // Alternative for test
  it("Should expect zero to act like zero", () => {
    let number = 0;
    expect(number).toBeDefined();
    expect(number).toBeFalsy();
    expect(number).not.toBeUndefined();
    expect(number).not.toBeNull();
    expect(number).not.toBeTruthy();
  });

  it("Number comparisons", () => {
    const a = 1;
    const b = 2;
    // expect(a).toEqual(b);
    expect(a + b).toBeGreaterThan(2);
    expect(a + b).toBeGreaterThanOrEqual(3);
    expect(a + b).toBeLessThan(4);
    expect(a + b).toBeLessThanOrEqual(5);
  });

  it("There should be no I in team", () => {
    let str = "team";
    expect(str).not.toMatch(/i/i);
    // expect(str).not.toMatch(/e/g);
  });
  it("There is 'stop in Christopher", () => {
    let str = "ChristoPher";
    expect(str).toMatch(/stop/i);
  });
});
