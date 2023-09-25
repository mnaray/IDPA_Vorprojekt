export function displayBonus(bonus) {
    const bonusElement = document.getElementById("total");

    // rounding: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed?retiredLocale=de
    bonusElement.innerText = bonus.toFixed(2);
}
