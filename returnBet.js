const returnBetButton = document.querySelector("#returnBetButton")

returnBetButton.addEventListener('click', () => {
    returnPrize()
})

function returnPrize () {
    lockDisplay(false);
    setMoneyAmount(parseFloat(valueAmount.textContent) + prizeAmount);
    resetPrize();
}
