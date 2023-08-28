let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
	let randomNumber = Math.floor(Math.random() * 3);

	if (randomNumber === 0) {
		return "rock";
	} else if (randomNumber === 1) {
		return "paper";
	} else if (randomNumber === 2) {
		return "scissors";
	} else {
		console.log("randomNumber Error");
	}
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		return `The player chose ${playerSelection} and the computer chose ${computerSelection}. It's a Draw!`;
	} else if (playerSelection === "rock" && computerSelection === "paper") {
		return `The player chose ${playerSelection} and the computer chose ${computerSelection}. Player loses!`;
	} else if (playerSelection === "rock" && computerSelection === "scissors") {
		return `The player chose ${playerSelection} and the computer chose ${computerSelection}. Player wins!`;
	} else if (playerSelection === "paper" && computerSelection === "scissors") {
		return `The player chose ${playerSelection} and the computer chose ${computerSelection}. Player loses!`;
	} else if (playerSelection === "paper" && computerSelection === "rock") {
		return `The player chose ${playerSelection} and the computer chose ${computerSelection}. Player wins!`;
	} else if (playerSelection === "scissors" && computerSelection === "rock") {
		return `The player chose ${playerSelection} and the computer chose ${computerSelection}. Player loses!`;
	} else if (playerSelection === "scissors" && computerSelection === "paper") {
		return `The player chose ${playerSelection} and the computer chose ${computerSelection}. Player wins!`;
	} else {
		console.log("playRound Error");
	}
}

function game() {
	while (playerScore < 3 && computerScore < 3) {
		let playerSelection = prompt("Choose Rock, Paper, or Scissors:");
		playerSelection = playerSelection.toLowerCase();
		let computerChoice = getComputerChoice();
		let roundResult = playRound(playerSelection, computerChoice);

		console.log(roundResult);

		if (roundResult.includes("Player wins")) {
			playerScore++;
		} else if (roundResult.includes("Player loses")) {
			computerScore++;
		} else {
			console.log("roundResult Error");
		}

		console.log(
			`Player score: ${playerScore}, Computer score: ${computerScore}`
		);
	}

	if (playerScore === 3) {
		console.log("Player wins the game!");
	} else if (computerScore === 3) {
		console.log("Computer wins the game!");
	} else {
		console.log("Score Error");
	}
}

game();
