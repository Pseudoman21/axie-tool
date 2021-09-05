let add = document.getElementById("add");
let addCard = document.getElementById("addCard");
let deduc = document.getElementById("deduc");
let deducCard = document.getElementById("deducCard");
let nextRound = document.getElementById("nextRound");
let nextRoundCard = document.getElementById("nextRoundCard");
let resetAll = document.getElementById("resetAll");
let cardCount = document.getElementById("cardCount");
let energyCount = document.getElementById("energyCount");

let currentEnergy = 3;
let currentCard = 6;


resetAll.addEventListener("click", ()=> {

    let defaultCard = 6;
    cardCount.innerHTML = defaultCard+"";
    currentEnergy = 3;
    energyCount.innerHTML = currentEnergy+"";
})


// energy
add.addEventListener("click", ()=> {
    if(currentEnergy>=10){
    }
    else {
        energyCount.innerHTML = currentEnergy+1 +"";
        currentEnergy = currentEnergy +1;
    }
})
deduc.addEventListener("click", ()=> {
    if(currentEnergy<=0){
    }
    else {
        currentEnergy = currentEnergy-1;
        energyCount.innerHTML = currentEnergy+"";
        
    }
})
nextRound.addEventListener("click", ()=> {
    if(currentEnergy>=10){
    }
    else {
        if(currentEnergy==9){
            currentEnergy = currentEnergy+1;
                energyCount.innerHTML = currentEnergy+"";
        }
        else{
            currentEnergy = currentEnergy+2;
                energyCount.innerHTML = currentEnergy+"";
        }
    }
})

// card
addCard.addEventListener("click", ()=> {
    if(currentCard>=12){
    }
    else{
        currentCard =+ currentCard + 1;
        cardCount.innerHTML = currentCard+"";

    }

})
deducCard.addEventListener("click", ()=> {
    if(currentCard<=0){
    }
    else {
        currentCard = currentCard-1;
        cardCount.innerHTML = currentCard+"";
    }
})
nextRoundCard.addEventListener("click", ()=> {
    if(currentCard>=12){
    }
    else {
        if(currentCard==11){
            currentCard = currentCard+1;
            cardCount.innerHTML = currentCard+"";
        }
        else if(currentCard==10){
            currentCard = currentCard+2;
            cardCount.innerHTML = currentCard+"";
        }
        else{
            currentCard = currentCard + 3;
            cardCount.innerHTML = currentCard+"";
        }
    }
})

