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
            enemy.hull -= this.firepower; // subtracts the value on the right-hand side from the value on the left-hand side and assigns the result back to the variable on the left-hand side
            console.log(`Alien has ${enemy.hull} hull remaining.`);
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
const alienShips = 6;

for (let i = 0; i < alienShips; i++) {
    const hull = Math.floor(Math.random() * 4) + 3;
    const firepower = Math.floor(Math.random() * 3) + 2;
    const accuracy = Math.random() * (0.2 + 0.6) + 0.2;
    const Alien = new spaceShip(hull, firepower, accuracy);
    Aliens.push(Alien);
}

let gameOver = false;

function gameRound() {
    const currentAlien = Aliens[0];

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

        const choice = window.prompt("Do you want to attack the next ship or retreat? (attack/retreat)");
        if (choice === "attack") {
            gameRound();
        } else if (choice === "retreat") {
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


// const btnAttack = document.querySelector('button');
// btnAttack.addEventListener('click', attack);


// let min = 0.2;
// let max = 0.6;
// let random = Math.random() * (max - min) + min;
// console.log("Random Number Generated : " + random);