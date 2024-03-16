const slots = document.querySelectorAll(".slot");
var bombSlots = [];

function setSlots () {
    var bombSet = document.querySelector("#bombsSelect").value;
    var slotsNumbers = [];

        //Choosing the bombs slots
    for (let index = 0; slotsNumbers.length < parseInt(bombSet); index++) {
        const defineSlot = Math.floor(Math.random() * 25) + 1;
        if (!slotsNumbers.includes(defineSlot)) {
            slotsNumbers.push(defineSlot);}
    }

    for (let index = 0; index < slots.length; index++) {
        const slot = slots[index];
        
        if(slotsNumbers.includes(parseInt(slot.id))) {
            console.log("a bomba esta na casa " + slot.id)
            bombSlots.push(slot)
        }
        
    }



}

