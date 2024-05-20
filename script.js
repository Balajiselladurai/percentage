let circularProgress = document.querySelector(".circular-progress-bar"),
    progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,
    progressEndValue = 95,
    speed = 100;

let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`;
    circularProgress.style.background = `conic-gradient(#0652dd ${progressStartValue * 3.6}deg, orange ${progressStartValue * 3.6}deg)`;
    if (progressStartValue == progressEndValue) {
        clearInterval(progress);
    }
}, speed);
