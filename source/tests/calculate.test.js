import { calculate } from "../modules/calculate";

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
