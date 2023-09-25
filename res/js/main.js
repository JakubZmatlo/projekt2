const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade");

let numberOfCookies = 0;
let costOfClickUpgrade = 20;
let costOfClickUpgradeIncrease = 1;


// {} - scope
cookie.onclick = () => {
    console.log("click");
    //numberOfCookies = numberOfCookies + 1;
    //numberOfCookies += 1;
    // ++ inkrement
    numberOfCookies++;
    console.log(numberOfCookies);
    counter.innerHTML = "Cookies: " + numberOfCookies;
}

const costOfClickUpgradeFunction = () => {
    if (numberOfCookies >= costOfClickUpgrade) {
        //Odecteme cenu upgradu 
        // pocet susenek a odectu 20
        numberOfCookies -= costOfClickUpgrade;

        //aktualizace odstavce 
        counter.innerText = "Cookies: " + numberOfCookies;

        //Zvedneme pocet susenek na kliknuti
        costOfClickUpgradeIncrease++;
    }
};

clickUpgrade.onclick = costOfClickUpgradeFunction

//Vytvoreni funkce 
//function nazev() {}
function cheats() {
    console.log("Cheats on!");
    numberOfCookies += 1000000
}
//Spusteni funkce
cheats();

const cheatsTwo = () => {
    numberOfCookies *= 2;
    counter.innerText = " Cookies: " + numberOfCookies;
}

cheatsTwo();
