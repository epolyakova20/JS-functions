function createGuessGame() {
    const secretPercentNumber = Math.floor(Math.random() * 100) + 1;

    return function playGame() {
        const userInput = prompt("Угадай число от 1 до 100");

        if (userInput === null) {
            alert("Игра окончена");
            return; 
        }

        const trimmedInput = userInput.trim();
        const userNumber = Number(trimmedInput);

        if (trimmedInput === "" || isNaN(userNumber)) {
            alert("Введи число!");
            return playGame();
        }

        if (userNumber > secretPercentNumber) {
            alert("Загаданное число меньше");
            return playGame();
        } else if (userNumber < secretPercentNumber) {
            alert("Загаданное число больше");
            return playGame();
        } else {
            alert("Поздравляю, Вы угадали!!!");
        }
    };
}

const startGame = createGuessGame();

startGame();
