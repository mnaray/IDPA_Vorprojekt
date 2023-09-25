import { readValues } from "../app";

// test("should parse number input", () => {
//     // TODO: Set up virtual DOM for this test!

//     // set values programmatically
//     const balanceElement = document.getElementById("balance");
//     const interestElement = document.getElementById("interest");
//     const dateElement = document.getElementById("date");

//     const expectedBalance = "20500.45";
//     const expectedInterest = "1.75";
//     const expectedDate = "2005-12-12";

//     balanceElement.value = expectedBalance;
//     interestElement.value = expectedInterest;
//     dateElement.value = expectedDate;

//     // reading the values from form
//     const { actualBalance, actualInterest, actualDate } = readValues();

//     // assert types
//     expect(typeof actualBalance).toBe("number");
//     expect(typeof actualInterest).toBe("number");
//     expect(typeof actualDate).toBe("string");

//     // assert values
//     expect(actualBalance).toBe(20500.45);
//     expect(actualInterest).toBe(1.75);
//     expect(actualDate).toEqual(expectedDate); // should not be altered
// });
