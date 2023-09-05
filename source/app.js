export function onSubmit(event) {
    throw new Error();
}

export function readValues() {
    try {
        const balance = parseInputToFloat("balance");
        const interest = parseInputToFloat("interest");
        const date = document.getElementById("birthday").value;

        return { balance, interest, date };
    } catch (err) {
        console.error(err.message);
        return;
    }

    function parseInputToFloat(inputId) {
        const inputValue = document.getElementById(inputId).value;
        if (isNaN(inputValue)) {
            throw new Error("Bitte nur Zahlen eingeben!");
        }
        const floatValue = parseFloat(inputValue);
        return floatValue;
    }
}

export function validate(balance, interest, birthday) {
    throw new Error();
}

export function calculate(balance, interest, birthday) {
    // parameter values have been validated at this point
    // date input format is following by default: "yyyy-mm-dd"

    // parsing: https://www.geeksforgeeks.org/convert-a-string-to-an-integer-in-javascript/
    // slicing: https://codingbeautydev.com/blog/javascript-get-last-two-characters-of-string/#:~:text=June%2024%2C%202022-,To%20get%20the%20last%20two%20characters%20of%20a%20string%20in,last%20two%20characters%20of%20str%20.
    let duration = parseInt(birthday.slice(-2));

    if (duration === 31) duration = 30;

    const yearly = (balance * interest) / 100; // total for a year
    const total = (yearly / 360) * duration; // total for the valid time period

    return total;
}
