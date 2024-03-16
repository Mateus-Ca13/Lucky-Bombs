const returnBetButton = document.querySelector("#returnBetButton")

returnBetButton.addEventListener('click', () => {
    lockDisplay(false);
    setMoneyAmount(parseFloat(valueAmount.textContent) + prizeAmount);
    resetPrize();
})
