var betAmount = document.querySelector("#betAmount");
var valueAmount = document.querySelector("#amount")
const setAmountButton = document.querySelectorAll(".modButton");
const betButton = document.querySelector("#betButton");
const bombSelect = document.querySelector("#bombsSelect")
var intBetAmount = parseFloat(betAmount.value);
console.log(typeof (parseInt(betAmount.value)))



// => Start game

betButton.addEventListener('click', () => {
    var intValueAmount = parseFloat(valueAmount.textContent).toFixed(2);
    intBetAmount = parseFloat(betAmount.value)

    if (intBetAmount < intValueAmount) {

        if (intBetAmount >= 1) {
            console.log(typeof (intBetAmount))
            restoreSlots();
            setSlots()
            setInitialMultiplier(bombSlots.length)
            lockDisplay(true);
            setMoneyAmount(intValueAmount - intBetAmount);
        } else {
            warningPopUp("O valor mínimo de aposta é de 1 real!")
        }

    } else {
        warningPopUp("O valor de aposta não pode ser maior que o montante!")
    }




})

// => Add/remove amount of money

setAmountButton.forEach((button) => button.addEventListener('click', (e) => {
    const operation = e.target.textContent;
    var intValueAmount = parseFloat(valueAmount.textContent).toFixed(2);


    if (operation == "+") {
        if (intBetAmount == intValueAmount) {
            return
        }
        intBetAmount = intBetAmount + 1;
        betAmount.value = intBetAmount.toFixed(2)
        return
    }
    if (operation == "-") {
        if (intBetAmount - 1 > 1) {
            intBetAmount = intBetAmount - 1;
            betAmount.value = intBetAmount.toFixed(2)
        } else {
            warningPopUp("O valor mínimo de aposta é de 1 real!")
        }
        return
    }
})
)


function lockDisplay(boolean) {
    bombSelect.disabled = boolean;
    betButton.disabled = boolean;
    returnBetButton.disabled = !boolean;
    setAmountButton.forEach((a) => a.disabled = boolean)
    slots.forEach((a) => a.disabled = !boolean);
}

function setMoneyAmount(amount) {
    valueAmount.textContent = amount.toFixed(2);
}




