import { HelloWorld, calculate, readValues, validate } from "../app";

test("should greet the world", () => {
    expect(typeof HelloWorld()).toBe("string");
    expect(HelloWorld().includes("Hello")).toBe(true);
});

// validation ---------------------------
test("should be true for valid values", () => {
    const actual = validate(2032.5, 2.21, "1999-12-12");
    expect(typeof actual).toBe("bool");
    expect(actual).toBe(true);
});

test("should be false for invalid interest type", () => {
    const actual = validate(2032, "a", "1999-12-12");
    expect(typeof actual).toBe("bool");
    expect(actual).toBe(false);
});

test("should be false for invalid balance type", () => {
    const actual = validate("a", 2.21, "1999-12-12");
    expect(typeof actual).toBe("bool");
    expect(actual).toBe(false);
});

test("should be false for invalid interest value", () => {
    const actual = validate(2032, -2.21, "1999-12-12");
    expect(typeof actual).toBe("bool");
    expect(actual).toBe(false);
});

test("should be false for invalid balance value", () => {
    const actual = validate(-2032, 2.21, "1999-12-12");
    expect(typeof actual).toBe("bool");
    expect(actual).toBe(false);
});

test("should be false for future date", () => {
    const actual = validate(2032, 2.21, "2050-12-12");
    expect(typeof actual).toBe("bool");
    expect(actual).toBe(false);
});

// calculation ---------------------------

test("should be around 1.6", () => {
    const actual = calculate(1000, 5, "2003-12-12");
    expect(typeof actual).toBe("number");
    expect(actual).toBeGreaterThan(1.65);
    expect(actual).toBeLessThan(1.67);
});

test("31st should not count", () => {
    const expected = calculate(1000, 5, "2007-10-30");
    const actual = calculate(1000, 5, "2007-10-31");
    expect(actual).toEqual(expected);
});

// value reading ---------------------------
test("should parse number input", () => {
    // TODO: Set up virtual DOM for this test!

    // set values programmatically
    const balanceElement = document.getElementById("balance");
    const interestElement = document.getElementById("interest");
    const dateElement = document.getElementById("date");

    const expectedBalance = "20500.45";
    const expectedInterest = "1.75";
    const expectedDate = "2005-12-12";

    balanceElement.value = expectedBalance;
    interestElement.value = expectedInterest;
    dateElement.value = expectedDate;

    // reading the values from form
    const { actualBalance, actualInterest, actualDate } = readValues();

    // assert types
    expect(typeof actualBalance).toBe("number");
    expect(typeof actualInterest).toBe("number");
    expect(typeof actualDate).toBe("string");

    // assert values
    expect(actualBalance).toBe(20500.45);
    expect(actualInterest).toBe(1.75);
    expect(actualDate).toEqual(expectedDate); // should not be altered
});
