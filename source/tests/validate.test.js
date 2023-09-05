import { validate } from "../app";

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
