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
            alert("Please only enter numerical values!");
        }
        const floatValue = parseFloat(inputValue);
        return floatValue;
    }
}
