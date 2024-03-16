const multiplierDisplay = document.querySelector("#multiplierDisplay")
const prizeDisplay = document.querySelector("#comingPrize");
var multiplier = 0;
var prizeAmount = 0;


function setInitialMultiplier (bombs) {
    multiplier = (1.01**bombs).toFixed(2)
    //console.log(multiplier)
    prizeAmount = intBetAmount
    multiplierDisplay.textContent = `x${multiplier}`
    prizeDisplay.textContent = intBetAmount.toFixed(2)
};

function updateMultiplier () {
    multiplier > 4 ? multiplier = multiplier = (multiplier**1.17*1.04 ).toFixed(2) : 
                     multiplier = (multiplier**1.07*1.04 ).toFixed(2)              
    prizeAmount = multiplier*intBetAmount;

    multiplierDisplay.textContent = `x${multiplier}`
    prizeDisplay.textContent = prizeAmount
};

function resetPrize () {
    multiplier = 0;
    prizeAmount = 0;
    multiplierDisplay.textContent = ""
    prizeDisplay.textContent = "--"
    
}

//Visual part


