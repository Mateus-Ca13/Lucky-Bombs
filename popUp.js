const popUp = document.querySelector(".popUp")
const popUpMessage = document.querySelector("#message")

function warningPopUp (message) {
    popUpMessage.textContent = message
    popUp.classList.add("visible")
    setTimeout(() => {
        popUp.classList.remove("visible")
    }, 3000);
}