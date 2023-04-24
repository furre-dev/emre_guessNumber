const input = document.getElementById("guessInput");
const button = document.getElementById("guessBtn");
const randomShower = document.querySelector(".randomEl");
const yourShower = document.querySelector(".yourEl");

function generateRound() {
	if (
		Number(input.value) > 100 ||
		Number(input.value) < 1 ||
		isNaN(input.value)
	) {
		alert("Måste vara ett nummer, måste vara mellan 1-100");
	} else {
		const randomNum = Math.floor(Math.random() * 100 + 1);

		randomShower.innerHTML = randomNum;
		yourShower.innerHTML = input.value;

		console.log(typeof Number(input.value));

		if (randomNum === Number(input.value)) {
			alert(`You won! The number was ${randomNum}`);
		}
	}
}

button.addEventListener("click", generateRound);
