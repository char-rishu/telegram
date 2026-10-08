const timer = document.getElementById("timer");
const continueBtn = document.getElementById("continueBtn");
const progressBar = document.getElementById("progressBar");
const status = document.getElementById("status");

let seconds = 25;


// Current URL se movie parameters lena
const params = new URLSearchParams(window.location.search);


// Countdown
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


// Continue button
continueBtn.addEventListener("click", () => {

    // Same movie data final page ko bhejna
    const movieData = new URLSearchParams();

    movieData.set(
        "imdb",
        params.get("imdb") || ""
    );

    movieData.set(
        "title",
        params.get("title") || ""
    );

    movieData.set(
        "year",
        params.get("year") || ""
    );

    movieData.set(
        "genre",
        params.get("genre") || ""
    );

    movieData.set(
        "rating",
        params.get("rating") || ""
    );

    movieData.set(
        "poster",
        params.get("poster") || ""
    );

    movieData.set(
        "description",
        params.get("description") || ""
    );


    window.location.href =
        `final.html?${movieData.toString()}`;

});