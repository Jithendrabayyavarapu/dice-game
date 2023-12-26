let player1Name = "Player 1";
let player2Name = "Player 2";

function updatePlayerNames() {
    const player1Element = document.getElementById("player1Label");
    const player2Element = document.getElementById("player2Label");

    player1Element.textContent = player1Name;
    player2Element.textContent = player2Name;
}

function rollDice() {
    animateDiceRoll();
}

function determineWinner(roll1, roll2) {
    const winnerMessage = document.createElement("p");
    const topDiv = document.querySelector(".top");
    const startHeading = document.querySelector(".start");

    if (roll1 > roll2) {
        winnerMessage.textContent = `${player1Name} wins!`;
        startHeading.textContent = `${player1Name} is the winner`;
        topDiv.style.backgroundColor = '#2ecc71'; 
    } else if (roll1 < roll2) {
        winnerMessage.textContent = `${player2Name} wins!`;
        startHeading.textContent = `${player2Name} is the winner`;
        topDiv.style.backgroundColor = '#e74c3c'; 
    } else {
        winnerMessage.textContent = "It's a tie!";
        startHeading.textContent = "It's a tie!";
        topDiv.style.backgroundColor = '#3498db'; 
    }

    topDiv.appendChild(winnerMessage);
}

function animateDiceRoll() {
    const dice1 = document.getElementById("diceImage1");
    const dice2 = document.getElementById("diceImage2");

    dice1.style.transform = `rotate(0deg)`;
    dice2.style.transform = `rotate(0deg)`;

    const winnerMessage = document.querySelector(".top p");
    if (winnerMessage) {
        winnerMessage.remove();
        document.querySelector(".top").style.backgroundColor = '#f0f0f0';
    }

    const roll1 = Math.floor(Math.random() * 6) + 1;
    const roll2 = Math.floor(Math.random() * 6) + 1;

    let rotationCount = 0;
    const rotationInterval = setInterval(() => {
        rotationCount += 15;

        dice1.style.transform = `rotate(${rotationCount}deg)`;
        dice2.style.transform = `rotate(${rotationCount}deg)`;

        if (rotationCount >= 360) {
            clearInterval(rotationInterval);

            dice1.style.transform = `rotate(0deg)`;
            dice2.style.transform = `rotate(0deg)`;

            dice1.src = `dice${roll1}.png`;
            dice2.src = `dice${roll2}.png`;

            determineWinner(roll1, roll2);
        }
    }, 15);
}

function editNames() {
    player1Name = prompt("Enter name for Player 1:", player1Name);
    player2Name = prompt("Enter name for Player 2:", player2Name);

    updatePlayerNames();

    const winnerMessage = document.querySelector(".top p");
    if (winnerMessage) {
        winnerMessage.remove();
        document.querySelector(".top").style.backgroundColor = '#f0f0f0'; 
    }

    const startHeading = document.querySelector(".start");
    startHeading.textContent = "Lets Play";
}

updatePlayerNames();
