import { HelloWorld, calculate, validate } from "../app";

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
