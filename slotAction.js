var slotsActivated =[];

slots.forEach((slot) => slot.addEventListener('click', (e) => {

    const selectedSlot = e.currentTarget;
    selectedSlot.classList.add("active")
    
    
    if(bombSlots.includes(selectedSlot) ) {
        slotsActivated.includes(slot)
        selectedSlot.children[0].src = "./assets/bomb.png"
        lockDisplay(false);
        resetPrize(); 
        
        
    } 
    else {
        if (!slotsActivated.includes(slot)) {
            slotsActivated.push(slot)
            selectedSlot.children[0].src = "./assets/coin.png";
            updateMultiplier(bombSlots.length);

            if (slotsActivated.length == coinSlots) {
                
                returnPrize ();
            }
        } 

    } 
})

)


function restoreSlots () {
    slots.forEach((slot) => {
        slot.classList.remove("active");
        slot.children[0].src = "./assets/circle.png";
    })
    bombSlots = [];
    slotsActivated =[];
}