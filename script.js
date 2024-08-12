let userChoices = document.querySelectorAll(".choice");
let compSelection = document.querySelector("#comp-selection");
let msg = document.querySelector(".msg");
let userScore = document.querySelector("#player-score");
let compScore = document.querySelector("#comp-score");





let userWinScore = 0;
let compWinScore = 0;

let userWinning = true;


let imageIndex = 0;
let imageChangeInterval;

const images = [
    "./Images/Rock.png",  // First image source
    "./Images/Paper.png",  // Second image source
    "./Images/Scissor.png"   // Third image source
];

const arr = ["rock", "paper", "scissor"]

const changeImage = () => {
    let imageElement = document.querySelector("#comp-selection");
    imageIndex = (imageIndex + 1) % images.length;
    imageElement.src = images[imageIndex];
    return arr[imageIndex];

}

function startChanging() {
    imageChangeInterval = setInterval(changeImage, 20);
}

function stopChanging() {
    clearInterval(imageChangeInterval);
}


const playGame = (userChoice) => {
    let compChoice = changeImage();
    console.log(userChoice)
    console.log(compChoice)

    if (userChoice === compChoice) {
        msg.innerHTML = "its Tie !!!!! Play Again 🙂"
        msg.style.backgroundColor = "black";
    }
    else {
        if (userChoice === "rock") {
            if (compChoice === "scissor") {
                userWinScore++;
                userScore.innerHTML = userWinScore;
                msg.style.backgroundColor = "green";
                msg.innerHTML = "Rock crushes Scissor !!!!! You Win 🙂"
                
            }
            else {
                compWinScore++;
                compScore.innerHTML = compWinScore;
                msg.style.backgroundColor = "red";
                msg.innerHTML = "Paper covers Rock !!!!! You Lose 🙂"
            }
        }
        else if (userChoice === "paper") {
            if (compChoice === "rock") {
                userWinScore++;
                userScore.innerHTML = userWinScore;
                msg.style.backgroundColor = "green";
                msg.innerHTML = "Paper covers Rock !!!!! You Win 🙂"
            }
            else {
                compWinScore++;
                compScore.innerHTML = compWinScore;
                msg.style.backgroundColor = "red";
                msg.innerHTML = "Scissor cuts Paper !!!!! You Lose 🙂"
            }
        }
        else {
            if (compChoice === "paper") {
                userWinScore++;
                userScore.innerHTML = userWinScore;
                msg.style.backgroundColor = "green";
                msg.innerHTML = "Scissor cuts Paper !!!!! You Win 🙂"
            }
            else {
                compWinScore++;
                compScore.innerHTML = compWinScore;
                msg.style.backgroundColor = "red";
                msg.innerHTML = "Rock crushes Scissor !!!!! You Lose 🙂"
            }
        }

    }
}

        userChoices.forEach((choice) => {

            choice.addEventListener("click", () => {

                userChoices.forEach(ch => {
                    ch.style.pointerEvents = "none";
                    if (ch !== choice) {
                        ch.style.opacity = "0.5";  
                    }
                });

                setTimeout(() => {
                    userChoices.forEach(ch => {
                        ch.style.opacity = "";
                        ch.style.pointerEvents = "";
                    });
                }, 2000);
            

                choice.disabled = true;
                setTimeout((choice.disabled = false) , 2000)
                let userChoice = choice.getAttribute("id")
                stopChanging();
                playGame(userChoice);
                setTimeout(startChanging, 2000)

            })
        })
        startChanging();

