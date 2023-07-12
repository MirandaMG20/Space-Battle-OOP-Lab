// Ship with properties and methods 
class spaceShip {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

    attack(enemy) {
        if (Math.random() < this.accuracy) {
            console.log("%c You HIT the alien!!!", "color: red");
            if (this.firepower >= enemy.hull) {
                enemy.hull = 0;
            } else {
                enemy.hull -= this.firepower;
            }
            console.log(`%c Alien has ${enemy.hull} hull remaining.`, `font-style: italic; border: 1px solid grey;`);
            if (enemy.hull <= 0) {
                console.log('Alien ship destroyed!');
            }
        } else {
            console.log("%c You MISSED the alien!!!", "color: red");
        }

    }
}

// My ship
const ussAssembly = new spaceShip(20, 5, 0.7);

// Alien ships
const Aliens = [];
const alienShips = 6; // number of ships

for (let i = 0; i < alienShips; i++) {
    const hull = Math.floor(Math.random() * 6) + 3;
    const firepower = Math.floor(Math.random() * 4) + 2;
    const accuracy = Math.random() * (0.6 + 0.8) + 0.6;
    const Alien = new spaceShip(hull, firepower, accuracy);
    Aliens.push(Alien);
}

let gameOver = false;

// Game round
function gameRound() {
    const currentAlien = Aliens[0];

    // ussAssembly attack first
    console.log("%c You are attacking an alien!", "color: green");
    ussAssembly.attack(currentAlien);

    if (currentAlien.hull <= 0) {
        console.log("%c You destroyed an alien ship!", "color: blue");
        Aliens.shift();
        if (Aliens.length === 0) {
            console.log("%c You destroyed all the aliens! You win!", "color: orange"); // orange win
            gameOver = true;
            return;
        }

        const Choice = window.prompt('Do you want to "Attack" the next ship or "Retreat"? Answer: a || r');
        if (Choice === "a") {
            gameRound();
        } else if (Choice === "r") {
            console.log("%c You retreated from the battle. Game over.", "color: orange");
            gameOver = true;
            return;
        } else {
            console.log("%c Invalid choice. Game over.", "color: blue");
            gameOver = true;
            return;
        }
    }

    console.log("%c The alien is attacking you!", "color: yellow");
    currentAlien.attack(ussAssembly);

    if (ussAssembly.hull <= 0) {
        console.log("%c Your spaceship was destroyed! Game over.", "color: red");
        gameOver = true;
        return;
    }

    if (!gameOver) {
        gameRound();
    }
}

gameRound();






// const attackButton = document.getElementById("attackButton");
// attackButton.addEventListener("click", () => {
//     gameRound();
// });

// const retreatButton = document.getElementById("retreatButton");
// retreatButton.addEventListener("click", () => {
//     console.log("%c You retreated from the battle. Game over.", "color: orange");
//     gameOver = true;
// });

// const btnAttack = document.querySelector('button');
// btnAttack.addEventListener('click', attack);

// let min = 0.2;
// let max = 0.6;
// let random = Math.random() * (max - min) + min;
// console.log("Random Number Generated : " + random);