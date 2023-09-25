export function validate(balance, interest, birthday) {
    // check interest
    if (isNaN(interest)) {
        alert("Interest is not a number!");
        return false;
    }

    if (interest <= 0) {
        alert("Interest is negative or 0. No bonus possible.");
        return false;
    }

    // check balance
    if (isNaN(balance)) {
        alert("Balance is not a number!");
        return false;
    }

    if (balance <= 0) {
        alert("Balance is negative or 0. No bonus possible.");
        return false;
    }

    // check date
    try {
        // check if input is in the future
        // conversion: https://www.scaler.com/topics/convert-string-to-date-javascript/
        if (new Date(birthday) > new Date()) {
            alert("Date is invalid!");
            return false;
        }

        return true;
    } catch (err) {
        console.error(err.message);
        return false;
    }
}
