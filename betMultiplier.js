const multiplierDisplay = document.querySelector("#multiplierDisplay")
const prizeDisplay = document.querySelector("#comingPrize");
var multiplier = 0;
var prizeAmount = 0;
var coinSlots = 0;
var bombsMultiplier = 0;


function setInitialMultiplier (bombs) {
    multiplier = (1.01**bombs).toFixed(2)
    bombs == 1 ? bombsMultiplier = 1.04 : bombs == 3 ?
     bombsMultiplier = 1.09 : bombs == 5 ?
     bombsMultiplier = 1.19 : bombsMultiplier = 1.55; 
    coinSlots = 25 - bombs;
    
    prizeAmount = intBetAmount
    multiplierDisplay.textContent = "x1.0"
    prizeDisplay.textContent = intBetAmount.toFixed(2)
};

function updateMultiplier (bombs) {
    
    multiplier > bombs * 5 ? multiplier = multiplier = (multiplier**1.17*bombsMultiplier ).toFixed(2) : 
                     multiplier = (multiplier**1.07*bombsMultiplier ).toFixed(2)              
    prizeAmount = multiplier*intBetAmount;

    
    upProgress ()
    multiplierDisplay.textContent = `x${multiplier}`
    prizeDisplay.textContent = prizeAmount.toFixed(2)
};

function resetPrize () {
    multiplier = 0;
    prizeAmount = 0;
    multiplierDisplay.textContent = ""
    prizeDisplay.textContent = "--"
    resetProgress()
    
}

//Visual part

const progressBar = document.querySelector("#progressValue")
var progressValue = 1;

function upProgress () {
    progressValue = progressValue + 100/coinSlots;
    progressBar.style.width = `${progressValue}%`;
}

function resetProgress () {
    progressValue = 1
    progressBar.style.width = `${progressValue}%`
}
