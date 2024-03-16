betAmount.addEventListener('keypress' , (e) => {
    const key = (e.key);
    console.log(key)
    const allowedKeys = ["0" ,"1", "2", "3", "4", "5", "6", "7", "8", "9", ".",]
    if(allowedKeys.includes(key)) {
        }
    else {
        setTimeout(() => {
            betAmount.value = betAmount.value.slice(0, -1)
        }, 10);
      
    }
    
})