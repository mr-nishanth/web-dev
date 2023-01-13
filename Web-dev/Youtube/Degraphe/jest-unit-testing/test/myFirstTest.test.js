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

describe("Test performs on Array", () => {
  const shoppingList = ["Milk", "Trash bags", "Paper towels", "iPhones"];
  test("The shopping list doesn't have PS4", () => {
    expect(shoppingList).not.toContain("PS4");
  });
  test("The shopping list does have Milk", () => {
    expect(shoppingList).toContain("Milk");
  });
});

//! Testing primitive and reference type equality
// In this case we are testing reference type equality.
// To make things abundantly clear "toEqual()" tests reference type equality while "toBe()" tests primitive type equality
describe("Testing  reference type equality", () => {
  const user = { name: "Nishanth" };
  user["age"] = 22;

  test("should return a user object with age as a key 22", () => {
    // toBe is only used for testing primitive types
    expect(user).toEqual({
      name: "Nishanth",
      age: 22,
    });

    expect(user.age).toEqual(22);
  });

  test("should return a user with a name and age key", () => {
    expect(user).toEqual(
      expect.objectContaining({
        name: expect.any(String),
        age: expect.any(Number),
      })
    );
  });

  // TESTING ARRAY EQUALITY
  test("should array equality", () => {
    const user = ["Nishanth", "Sun", "Moon"];
    user.push("Hell");

    expect(user).toEqual(["Nishanth", "Sun", "Moon", "Hell"]);
    expect(user).toEqual(expect.arrayContaining(["Hell"]));
    expect(user).toEqual(expect.arrayContaining([expect.any(String)]));
  });

  test("should array of object equality", () => {
    const userObjectInArray = [
      {
        user: "Nishanth",
        age: 22,
      },
      {
        user: "Sun",
        age: 12345,
      },
      {
        user: "Moon",
        age: 21231,
      },
    ];
    userObjectInArray.push({
      name: "Football",
      age: 50,
    });
    expect(userObjectInArray).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          age: expect.any(Number),
        }),
      ])
    );
  });
});

const { sum, deletedUserById } = require("../utils/helper");
describe("Testing imported Function ", () => {
  test("should sum function should add 2 numbers", () => {
    expect(sum(5, 3)).toBe(8);
  });

  test("Delete by ID function should delete a user by their ID", () => {
    const users = [
      { name: "John", id: 1 },
      { name: "Rose", id: 2 },
      { name: "Mike", id: 3 },
    ];
    expect(deletedUserById(users, 3)).toEqual([
      { name: "John", id: 1 },
      { name: "Rose", id: 2 },
    ]);
  });
});
