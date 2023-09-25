import { calculate } from "./calculate.js";
import { readValues } from "./readValues.js";
import { validate } from "./validate.js";
import { displayBonus } from "./displayBonus.js";

export function onSubmit(event) {
    event.preventDefault();

    const { balance, interest, date } = readValues();

    if (!validate(balance, interest, date)) return;

    const bonus = calculate(balance, interest, date);

    displayBonus(bonus);
}
