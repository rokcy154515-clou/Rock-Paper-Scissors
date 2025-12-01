let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

const setMessage = (text, type = "") => {
    msg.innerHTML = text;
    msg.classList.remove("win", "lose");

    if (type === "win") {
        msg.style.backgroundColor = "rgba(0, 128, 0, 0.9)";
        msg.classList.add("win");
    } else if (type === "lose") {
        msg.style.backgroundColor = "rgba(220, 20, 60, 0.9)";
        msg.classList.add("lose");
    } else {
        msg.style.backgroundColor = "#081b31";
    }
};

const drawGame = (userChoice, compChoice) => {
    setMessage(
        `It's a draw! You chose ${userChoice} and I chose ${compChoice}. Same vibes, same brain 💜`,
        ""
    );
};

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const showWinner = (userWin, userChoice, compChoice) => {
    userChoice = capitalize(userChoice);
    compChoice = capitalize(compChoice);

    if (userWin) {
        userScore++;
        userScorePara.innerHTML = userScore;

        setMessage(
            `You win this round, Aradhya! ✨<br>Your ${userChoice} beats my ${compChoice}.<br><small>P.S. Kamal loves you sooo much 😘💖</small>`,
            "win"
        );

        // cute milestone surprise
        if (userScore === 5) {
            setMessage(
                `Aradhya, you reached 5 points! 🥳<br>
                 Official announcement: You permanently own Kamal's heart 💘`,
                "win"
            );
        }
    } else {
        compScore++;
        compScorePara.innerHTML = compScore;

        setMessage(
            `Okay, I win this round 😜<br>My ${compChoice} beats your ${userChoice}.<br><small>But remember, in real life *you* always win my heart 💞</small>`,
            "lose"
        );
    }
};

const playGame = (userChoice) => {
    const compChoice = getCompChoice();

    if (userChoice === compChoice) {
        drawGame(userChoice, compChoice);
    } else {
        let userWin = true;

        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
