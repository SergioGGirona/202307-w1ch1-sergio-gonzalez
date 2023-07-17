export const startTimer = () => {
    const remainingSeconds = 200;
    const timer = document.querySelector("timer");
  
    const timeToZero = setTimeout(() => {
      endgame();
    }, 200000);
  
    const updateTimer = () => {
        if (remainingSeconds === 0) {
            clearTimeout(timeToZero);
            timer.textContent = "0!";
        } else {
            timer.textContent = `${remainingSeconds}`;
            remainingSeconds--;
            timeToZero = setTimeout(updateTimer, 1000);
        }
    }
    updateTimer();
};

export const startGame = () => {
    const startButton = document.querySelector(".startgame");
    startButton.addEventListener('click', () => {
        let welcome = document.querySelector(".welcome");
        welcome.style.display = "none";

        let questions = document.querySelector(".questions");
        questions.style.visibility = "visible";

        let score = document.querySelector(".score");
        score.style.visibility = "visible";

        let title = document.querySelector(".title");
        title.style.fontSize = "40px";

        let alphabet = document.querySelectorAll(".letter");
            alphabet.forEach((letter, index) => {
            const position = (index * 13.35) + 270;
            letter.style.display = "flex";
            letter.style.transform = `rotate(${position}deg) translate(30vh) rotate(-${position}deg)`;
            letter.style.transition = "transform 2s";
        })
                    
    })
    startTimer();
};

export const endgame = (startTimer) => {
    clearTimeout(timeToZero);


};


