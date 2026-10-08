const timer = document.getElementById("timer");
const continueBtn = document.getElementById("continueBtn");
const progressBar = document.getElementById("progressBar");
const status = document.getElementById("status");

let seconds = 15;

const countdown = setInterval(() => {

    seconds--;

    timer.textContent = seconds;

    const progress = ((15 - seconds) / 15) * 100;
    progressBar.style.width = progress + "%";

    if (seconds <= 0) {

        clearInterval(countdown);

        timer.textContent = "✓";

        status.textContent = "Step 1 completed.";

        continueBtn.disabled = false;
        continueBtn.textContent = "Continue";

    }

}, 1000);

continueBtn.addEventListener("click", () => {

    window.location.href = "step2.html";

});