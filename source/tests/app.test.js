/**
 * @jest-environment jsdom
 */
import { HelloWorld } from "../app";

test("should greet the world", () => {
    expect(typeof HelloWorld()).toBe("string");
    expect(HelloWorld().includes("Hello")).toBe(true);
});
