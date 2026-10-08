const timer = document.getElementById("timer");
const continueBtn = document.getElementById("continueBtn");
const progressBar = document.getElementById("progressBar");
const status = document.getElementById("status");

let seconds = 25;

const countdown = setInterval(() => {

    seconds--;

    timer.textContent = seconds;

    const progress = ((25 - seconds) / 25) * 100;
    progressBar.style.width = progress + "%";

    if (seconds <= 0) {

        clearInterval(countdown);

        timer.textContent = "✓";

        status.textContent = "Your link is almost ready.";

        continueBtn.disabled = false;
        continueBtn.textContent = "Continue";

    }

}, 1000);


continueBtn.addEventListener("click", () => {

    window.location.href = "final.html";

});